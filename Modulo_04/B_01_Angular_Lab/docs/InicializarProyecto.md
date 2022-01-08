# Mdoulo 04 - Angular: Laboratorio

## Requerimientos:

* ***Node.js***: verificado con el comando ```node -V```
* ***NPM***: verificado con el comando ``` npm -v```
* ***GIT***: verificado con el comando ``` git --version  ```

Se debe instalar el CLI de Angular, se utiliza para ello el comando:
```npm install -g @angular/cli ```
o 
```npm install -g @angular/cli@10.0.0 ``` 
para instalar una versión concreta de Angular.

Como esta instalado de ejercicios anteriores verificamos la versión con el comando ```ng version``` o ```ng v```

## Inicializando el proyecto.

a) Creamos la aplicacion utilizando el CLI:

``` ng new lab-angular-01 ```

Respondemos a las siguietnes preguntas de configuración:
* ¿Utilizar Routing?            Yes
* Tipo de Estilos a aplicar:    SCSS

b) Ejecutamos aplicación: ``` ng serve ``` dentro de la carpeta del proyecto ```lab-angular-01```.

## Agregamos Angular Material

[Angular Material](https:\\angular.material.io), es la implementación de la guia de diseño Material Design de Google en Angular. Contiene las siguientes partes:
 * Componentes: diferentes elementos de UI con una apariencia integrada.
 * Temas: una serie de [temas](https://material.angular.io/guide/theming/) preinstalados, y la posibilidad de añadir nuevos.
 * Iconos: mas de [900 iconos](https://material.io/resources/icons/).

### Instalación:

Se reuiere intalar un paquete de npm que incorpore esta librería a la aplicación, para ello usamos la siguiente instrucción:

```ng add @angular/material```

Durante la instalación responderemos a las siguiente preguntas:
 * ¿?: YES
 * Elegir tema: Purple/Green (por cambiar).
 * Set global typography stiles: N (mantenemos la aplicación lo mas simplificada)
 * Browser Animations: YES (opción por defecto)

 Agregamos algun control de prueba, para ello se han de seguir los siguientes pasos:
 1. Importar el control
 2. 
  - Botton: ```  ```