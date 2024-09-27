# Testing With Jest
Explicacion sobre el uso de Jest


## Índice
- [Introduccion](#introduccion)
- [Instalacion](#instalacion)
- [Ejecucion](#ejecucion)
- [Explicacion de los archivos](#explicacion-de-la-architectura-del-proyuecto)
- [Terminos](#terminos)


## Introduccion
Este proyecto tendra lo que he adelantado de Jest ademas de servir como recuerdo de algunos aspectos propios de Jest


## Instalacion
    1. Instala las dependencias ( Jest )
        ```bash
        npm i
        ```


## Ejecucion
    - Ejecutamos todos los archivos .test
        ```bash
        npm test
        ```
    - Ejecutamos solo el archivo que indicamos con: npx jest "direccion al arcivo"
        ```bash
        npx jest ./prueba_basica/sum.test.js
        ```
    - Podemos crear comando personalzados en el package.json
        1. En el package.json, scripts metemos el comando personalizado
            - Ejemplo: "test:nombre_comando":"jest ruta_al_archivo"
        2. Ejecutamos con npm run "comando custom", Ejemplo:
            ```bash
            npm run test:basico1
            ```


## Explicacion de la architectura del proyuecto
    - packages.json: Este archivo contendra todas las dependencias del proyecto por si quieres revisarlo
    - README.md: Archivo con la explicacion, documentacion o informacion necesaria
    - .gitignore: Contiene los archivos o carpetas que no se subiran al repositorio git


## Terminos
    - CommonJS: Es un estándar de módulos para JavaScript, principalmente utilizado en Node js.
        - Exportar: module.exports
        - Importar: require