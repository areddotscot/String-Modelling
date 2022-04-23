const path = require("path");

module.exports = {
    "mode" : "development",
    
    "entry": "./src/typescript/index.ts",

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".ts", ".js"],
    },

    "output": {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}