# 從新出發
本來是想學webgl，但好像偏離主題了

# 裝node
到官網下載


# 快速初始化專案

```
npm init -y
```

# 裝typescript
```
npm install --save-dev typescript ts-loader
```

# 裝webpack
參考這裡
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
```
npm install --save-dev webpack webpack-cli
```

# typescript認不出offscreencanvas
npm install --save @types/offscreencanvas

# 建立index.html
加入
```
<script src='./dist/build.js'></script>
```

# 建立dist,src資料夾
src裡放程式碼，dist是build完輸出的地方

# 設定tsconfig.json,webpack.config.js
參考這裡
https://webpack.js.org/guides/typescript/

tsconfig.json
```
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "allowJs": true
    }
}
```

webpack.config.js
重點是entry和output要設對
```
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    devtool: 'inline-source-map',
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
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```


# 執行webpack
```
npx webpack
```

# 啟動live server
點擊index.html，啟動live server就可以看到結果了

# 遇到npm update會出現一堆error?
把devDependencies、dependencies區塊從package.json拿掉，手動重裝吧，我跟npm也不太熟

# white ray tracing 101
![image](https://lh3.googleusercontent.com/pw/AM-JKLV1XpuWY-_Dl9b5w7aBOvFXDrahhi94pWDDOUHvbKWJpxywLOEjIp7c0YLzUxHisMANnjY9qha2axIHrjPrmhBfTqFQ-ULakNxqlboYxLp7zyJAoNAWUt3fXMy-fRj8Nlq_XDMgIUdUCu83k_3s9ORCgw=w1568-h882-no?authuser=0)

# 執行方法
vs code 裝live server
在*.html按右鍵，就可以啟動了

# Demo
[run on website](https://xwc2021.github.io/mypage/)
