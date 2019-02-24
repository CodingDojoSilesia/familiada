const postcssPresetEnv = require('postcss-preset-env');
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            postcssPresetEnv({
                browsers: ['last 2 Chrome versions']
            }),
            require('cssnano')
        ]
    };
    return;
}
module.exports = {};