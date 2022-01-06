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
       |- index.html   =>

3. Instalación y configuración de WebPack:

    a) Instalación de WebPack y webpack-cli:

         npm install webpack webpack-cli --save-dev

    b) Configuración del *package.json* pra lanzar webpack.
    
    El area de *script* en el **package.json** permite definir comandos que se ejecutaran con npm run.

    Definimos en el **package.json** dentro del área de **scripts** el ***"build"*** 

        "build": "webpack --mode development", 

    c) Realizamos la primera build.

        npm run build
    
4. Fichero de Configuración

    a) Creamos fichero de configuracion en la raiz: ``` webpack.config.js ```

    b) Configuramos propiedades

5. Instalamos servidor para visualizar la web:

    a) Instalar: ``` npm install --save-dev webpack-dev-server ```

    b) Crear script start en *package.json*: ```start: "webpack serve --mode development" ```

    c) Configurar Webpack:

    El servidor ademite una seccion de configuración dentro de *webpack.config.js* 

7. Instalamos plugin para eliminar la build anterior antes de hacer una nueva build, para ello utilizamos el plugin [*HTML Webpack Plugin*](https://webpack.js.org/plugins/html-webpack-plugin/):

    a) Instalar: ``` npm install --save-dev html-webpack-plugin   ```

    b) Hacer el requiere para importar la libreria: ``` const HtmlWebpackPlugin = require('html-webpack-plugin'); ```

    c) Configurar Webpack, dentro del área de pluging:

    ```
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./src/index.html",
                    filename: "index.html",
                    scriptLoading: "blocking",
            }),
        ]
    ```

8. Transpilación a ES2015 con Babel.

    a) Instalar: 

    - Libreria: ``` npm install --save-dev @babel/cli @babel/core @babel/preset-env  ```

    - Loader: ``` npm install --save-dev babel-loader ```

    b) Configurar Webpack, para que webpack se pueda comu 




   
   rdfg

    




    

