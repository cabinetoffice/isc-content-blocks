const webpack = require('webpack');

// @TODO - to me check 3.25:3.18 for webpack imports, e.g. Terser + CleanPlugin

/**
 *
 * @param env
 * @param argv
 * @returns {{entry: string, output: {filename: string}, module: {rules: {test: RegExp, exclude: RegExp, use: {loader: string, options: {plugins: string[], presets: *[]}}}[]}, externals: {"@wordpress/blocks": string[]}}[]}
 */

module.exports = ( env, argv ) => {

    let isDevelopment = () => {
        return argv.mode === 'development';
    };

    // was var config = {}
    return [
        {
            entry: './src/editor.js',
            output: {
                // path
                filename: 'editor-output.js'
            },
            devtool: isDevelopment() ? 'cheap-module-eval-source-map'
                : 'source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                    "@babel/plugin-proposal-class-properties"
                                ],
                                presets: [
                                    '@babel/preset-env',
                                    [
                                        '@babel/preset-react',
                                        {
                                            "pragma": "wp.element.createElement",
                                            "pragmaFrag": "wp.element.Fragment",
                                            "development": isDevelopment()  //was : argv.mode === 'development'
                                            // @TODO - to me - see #2.15 + 3.27:3:29 for change to React......
                                        }
                                    ]
                                ]  // END: presets
                            }
                        } // END: use
                    },
                    {
                        test: /\.(sa|sc|c)ss$/,
                        // @me: these are applied last -> first, i.e. sass-loader first then....
                        use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]  // END: rules
            },
            externals: {
                "@wordpress/blocks": ["wp","blocks"],
                "@wordpress/i18n": ["wp","i18n"],
                "@wordpress/editor": ["wp","editor"],
                "@wordpress/block-editor": ["wp","blockEditor"],
                "@wordpress/components": ["wp","components"],
                "@wordpress/data": ["wp","data"],
                "@wordpress/compose": ["wp","compose"],
                "@wordpress/html-entities": ["wp","htmlEntities"],
                "@wordpress/date": ["wp","date"],
                "@wordpress/plugins": ["wp","plugins"],
                "@wordpress/edit-post": ["wp","editPost"],
                "@wordpress/api-fetch": ["wp","apiFetch"],
                "@wordpress/server-side-render": ["wp","serverSideRender"],
                "lodash": {
                    commonjs: 'lodash',
                    amd: 'lodash',
                    root: '__'
                }
            }
        }
    ]// END return - slimmed
};