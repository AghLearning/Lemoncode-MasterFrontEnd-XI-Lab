# Ejercicio 1: Bundling Básico

En este ejercio vamos a implementar paso-a-paso una aplicación qe contenga el bundling necesario para trabajar con TypeScript y SASS.

## Requerimientos:

* Node.js con NPM.
* Sistema de módulos de J.

## Componentes:
* [*Webpack](https://webpack.js.org/)

* Loaders:
    * Transpilador: [*HTML Webpack Plugin*](https://webpack.js.org/plugins/html-webpack-plugin/)

* Plugins:
    * [*HTML Webpack Plugin*](https://webpack.js.org/plugins/html-webpack-plugin/)

## Pasos realizados:

1. Inicializamos el package.json: ```npm init -y```
2. Creamos la carpeta contenedora del codido fuente, y el código base:
    src|
       |- index.js   => solo tiene un console.log para pruebas.
       |- index.html => pagina de inicio -> Requiere HTML Webpack Plugin
       |- mystyle.css => 

3. Instalación y configuración de WebPapck:
    * ``` npm install webpack webpack-cli --save-dev ```
    * ***package.json*** configuramos build en el área de scripts:  ``` "build": "webpack --mode development",  ```
    * Build de prueba: ``` npm run build ```
    * Loaders:
        * CSS: ``` npm install --save-dev style-loader css-loader ```
            - css-loader: permite cargar fichero css
            - style-loader: inserta los css en el html.
            - Separamos CSS de codigo JS, configurando el entry point:

            ```
                entry: {
                    app: "./src/student.js", 
                    appStyles: "./src/mystyles.css"
                },
            ```  
    * Plugins:

        * [*HTML Webpack Plugin*](https://webpack.js.org/plugins/html-webpack-plugin/):

            a) Instalar: ```npm install --save-dev html-webpack-plugin ```

            b) Configurar:

            * Importar la libreria: ``` const HtmlWebpackPlugin = require('html-webpack-plugin'); ```

            * Configurar Webpack, dentro del área de pluging:

                ```
                        plugins: [
                            new HtmlWebpackPlugin({
                                template: "./src/index.html",
                                filename: "index.html",
                                scriptLoading: "blocking",
                        }),
                    ]
                ```
        * Clean Webpack Plugin: Limpia la carpeta de outputs (dist).

            a) Instalar: ```npm install clean-webpack-plugin --save-dev```

            b) Importar y configurar. En la configuración se ha de añadir a output la ruta donde se genera la publicación.

                ```
                    ...
                    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
                    const path = require('path');
                    ...

                    output: {
                        filename: '[name].[chunkhash].js',
                        path: path.resolve(process.cwd(), "dist"),
                    },
                    plugins: [
                        new CleanWebpackPlugin(),
                    ],
                ```

        * Para genear ficheros css en lugar de incrustarlos en el HTML utilizamos el plugin Mini CSS Extract:

            a) Instalar: ``` npm install mini-css-extract-plugin --save-dev ```
            
            b) Configurar:

4. Instalación del servidor (webpack-dev-server):
    * Instalación: ``` npm install --save-dev webpack-dev-server ```
    * Configuración: crear script start en *package.json* => ```start: "webpack serve --mode development" ```
    * Area de configuración en Webpack: 
        ```
            devServer: {
                port: 8081,
            }
        ```
        
5. Instalación y configuracion del transpilador **Babel**:
    * Instalamos paquetes:
        * Libreria: ```npm install --save-dev @babel/cli @babel/core @babel/preset-env ```
        * Configuración (preset): ``` npm install --save-dev @babel/preset-env  ```
        * Loaders:
                * ``` npm install --save-dev babel-loader ```
    * Configuración:
        * Mediante fichero: ``` webpack.config.js ```
        * Configuración carpeta con ```.babelrc ```
    







    




    

