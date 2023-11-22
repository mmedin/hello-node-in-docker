English? [Here](README.md)

# Hello Node in Docker

Breve tutorial sobre cómo dockerizar una aplicación Node.

Este repositorio incluye una sencilla aplicación "hola mundo" Node y las instrucciones para lograr construir una imagen de container que la incluya, empaquetada con todo aquello que nuestra app necesita para correr adecuadamente.

Es un buen punto de partida para aprender sobre las posibilidades de Docker.

## Pre-requisitos

Este tutorial está realizado de manera que sólo necesitas [Docker](https://docs.docker.com/engine/install/) para seguirlo.

No es necesario que instales Node, NPM, ni ninguna otra herramienta relacionada.

## La aplicación

Es una sencilla aplicación Node que usa Express para mostrar un mensaje "hola mundo" en puerto 3002.

https://github.com/mmedin/hello-node-in-docker/blob/d2574daaca6ece710b5bc83bbd1839639356a1ca/app.js#L1-L14

## El Dockerfile

Es el archivo con las definiciones que necesitamos para construir nuestra imagen de container. Es también parte de este repo y viene con los comentarios como para entender lo que hace cada línea.

https://github.com/mmedin/hello-node-in-docker/blob/ec8383511e3cc66417ebaaf390548b2840eee157/Dockerfile#L1-L13

## El build

Para realizar el build hay que correr el siguente comando:

```bash
docker build . -t my-demo-app
```

El punto hace referencia a la carpeta donde estamos parados, ya que allí se encuentra el Dockerfile. El parámetro `-t` se utiliza para declarar la etiqueta, tag o nombre de nuestra imagen.

## Ejecutando el container

Finalmente, cuando ya está lista nuestra imagen, podemos ejecutar el siguiente comando para levantar un container y verla en acción:

```bash
docker run --rm -d -p 3002:3002 my-demo-app
```

El parámetro `--rm` elimina el container cuando se detiene. El parámetro `-d` (detach) libera el prompt de la terminal. El parámetro `-p` sirve para exponer el puerto 3002 y que sea accesible desde fuera del container.

Sólo resta acceder a http://localhost:3002 y verificar que podemos ver el mensaje "hola mundo" previsto.
