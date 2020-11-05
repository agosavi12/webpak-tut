const path = require("path");

module.exports={
    mode: "production",
    entry: "./src/App.js",
    //Loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //Loader
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: "Output.js"
    }
}