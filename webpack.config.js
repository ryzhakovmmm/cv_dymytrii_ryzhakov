// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// var postcssImport = require("postcss-import");
// var postcssNesting = require("postcss-nesting");
// var postcssNested = require("postcss-nested");
// var postcssSelectorNot = require("postcss-selector-not");
// var postcssNext = require("postcss-cssnext")({
//     browsers: "> 1%, last 4 versions, Firefox ESR, Safari >= 7.1, iOS >= 7.1, Chrome >= 32, Firefox >= 24, Opera >= 24, IE > 8"
// });

var path = require("path");

module.exports = {
    mode: "development",
    target: 'web',
    entry: {
        'one': './src/index.css'
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'index.css' // output js file name is identical to css file name
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'postcss-loader',
                        options: { importLoaders: 1 }
                    }
                ]
            },
            {
                test: /\.(png|jpg|JPG)$/,
                loader: 'url-loader'
            }
            // {test: /\.css$/, loader: 'style-loader!css-loader'},

            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         {loader: 'css-loader', options: {modules: false, importLoaders: 1}},
            //         {
            //             loader: 'postcss-loader',
            //             // options: {
            //             //     plugins: [
            //             //         postcssImport,
            //             //         postcssNesting,
            //             //         postcssNested,
            //             //         postcssSelectorNot,
            //             //         postcssNext
            //             //     ]
            //             // }
            //         }
            //     ]
            // }
        ]
    },


    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        stats: "minimal",
        proxy: {
            "/api/v1.0/": "http://localhost:8000"
        }
    }
};