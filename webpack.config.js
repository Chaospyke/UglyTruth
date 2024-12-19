module.exports = {
    entry:'./src/index.js',
    output:{
        filename:"main.js"
    },
    module: {
        rules:[
            {
                test:/\.json$/,
                use:[
                    'json-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                    options: {
                        cacheDirectory:true,
                        cacheCompression:false,
                    }
                }
            },
        ],
    },
};