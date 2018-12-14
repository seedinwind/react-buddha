module.exports = {
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style-loader!css-loader' // Run both loaders
            }
        ]
    }
};