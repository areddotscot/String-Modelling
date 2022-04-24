const path = require("path");

module.exports = {
    "mode" : "development",
    
    "entry": {
        "index": "./src/typescript/index.ts",
        "browser" : "./src/typescript/browser.ts"
    },

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
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}