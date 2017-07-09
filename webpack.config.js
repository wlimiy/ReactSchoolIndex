let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');//这个插件的作用是依据一个简单的模板，帮你生成最终的Html5文件
module.exports={
    entry:'./src/main.js',//唯一入口文件
    output : {
        path:path.resolve('dist'),//打包后的文件存放的地方,path必须是绝对路径
        filename:'bundle.js'//打包后输出文件的文件名
    },
    devtool:'source-map',//可以映射出对应的源码位置
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//从后往前写
            {test:/\.(jpg|png|gif)$/,use:'url-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};