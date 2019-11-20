// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* config options here */
});

module.exports = {
    webpack(config, { dev }) {
        if (dev) {
            config.module.rules.push({
                test: [/\.ts$/, /\.js$/, /\.tsx$/],
                loader: 'eslint-loader',
                exclude: ['/node_modules/', '/.next/', '/out/'],
                enforce: 'pre',
                options: {
                    emitWarning: true,
                },
            });
        }
        return config;
    },
};
