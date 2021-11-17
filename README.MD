# 從新出發
使用過cocos creator後，有點無法忍受unity build webgl的龜速
本來是想學webgl，但好像偏離主題了

# 裝nvm (node version manager)
https://github.com/coreybutler/nvm-windows/releases

裝好之後

看目前可以取得的版本
```
nvm list available
```

裝你要的版本
```
nvm install 12.18.2
```

使用這個版本
```
nvm use 12.18.2
```


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
