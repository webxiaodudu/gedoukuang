const port  = 8081;
const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir);
}
module.exports={
    lintOnSave:false,
    devServer:{
        port,
        open:true,
        // proxy:{
        //     '/api/':{
        //         target:"http://localhost:8000/mock/",
        //         changeOrigin:true,
        //         pathRewrite:{
        //            /api/:""
        //         }

        //     }
        // }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":resolve('src'),
                "components":resolve('src/components'),
                "utils":resolve('src/utils')
            }
        }
    }
}