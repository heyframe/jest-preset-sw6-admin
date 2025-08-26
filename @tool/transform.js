const babelOptions = {
    presets: ['@babel/preset-typescript'],
    plugins: [
        'heyframe-vite-meta-glob'
    ],
    env: {
        test: {
            presets: [
                '@babel/preset-env'
            ],
        }
    },
    ignore: [],
    exclude: []
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
