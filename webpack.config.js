const path = require('path');

let target = '';
let out = '';

let app = 1;
switch (app) {
    case 0:
        target = './src/WhiteRayTracingApp.ts';
        out = 'WhiteRayTracingApp.js';
        break;
    case 1:
        target = './src/RasterizerApp.ts';
        out = 'RasterizerApp.js';
        break;
    case 2:
        target = './src/TestTextureApp.ts';
        out = 'TestTextureApp.js';
        break;
    case 3:
        target = './src/CreateScriptPlugin.ts';
        out = 'CreateScriptPlugin.js';
        break;
    case 4:
        target = './src/DynamicLoadingScriptApp.ts';
        out = 'DynamicLoadingScriptApp.js';
        break;

}

module.exports = {
    entry: target,
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: out,
        path: path.resolve(__dirname, 'dist'),
    },
};