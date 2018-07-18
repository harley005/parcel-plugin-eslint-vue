const logger = require('parcel/src/Logger');
const eslintLogger = require('./logger');

module.exports = function (bundler) {

    bundler.addAssetType('js', require.resolve('./assets/JSESLintAsset.js'));
    bundler.addAssetType('vue', require.resolve('./assets/VueESLintAsset.js'));

    bundler.on('bundled', () => {
        const errors = eslintLogger.get();

        if (errors.length == 0) {
            return;
        }

        logger.clear();
        errors.forEach(element => {
            logger.write(element);
        });

        const message = errors.map(element => {
            return element.replace(/\u001B]1337;.*?\u0007/g, '').replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
        }).join('');

        bundler.hmr.emitError({
            message: message,
            stack: []
        });
        
        eslintLogger.clear();
    });
};
