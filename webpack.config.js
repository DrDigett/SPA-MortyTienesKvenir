 //Nos permite acceder a donde estámos en las carpetas
const path = require('path');

//Archivo necesario para trabajar con HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin');

 //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports = { 
    entry: './src/index.js', //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),  //Creamos el lugar dónde se exportará el proyecto.
        
        //Este es el nombre del archivo final para producción.
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'], //Extensiones que vamos a utilizar.
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [
            {   
                //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js?$/,
                
                //Excluimos la carpeta de node modules
                exclude: /node_modules/,    
                
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(  //Permite trabajar con los archivos HTML
            {
                //Cómo vamos a inyectar un valor a un archivo HTML.
                inject: true,
                
                //Dirección donde se encuentra el template principal
                template: './public/index.html',    
               
                //El nombre que tendrá el archivo
                filename: './index.html'
            }
        ),
    ]
}