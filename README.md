Español? [Aquí](README.es.md)

# Hello Node in Docker

Brief tutorial on how to dockerize a Node app

This repository includes a simple "hello world" Node application and instructions on how to build a container image that includes it, packaged with everything our app needs to run properly.

It is a good starting point to learn about the possibilities of Docker.

## Pre-requisites

This tutorial is made in such a way that you only need [Docker](https://docs.docker.com/engine/install/) to follow it.

You do not need to install Node, NPM, or any other related tools.

## The application

This is a simple Node application that uses Express to display a "hello world" message on port 3002.

https://github.com/mmedin/hello-node-in-docker/blob/main/app.js

## The Dockerfile

This is the file with the definitions we need to build our container image. It is also part of this repo and comes with comments to understand what each line does.

https://github.com/mmedin/hello-node-in-docker/blob/main/Dockerfile

## The build

To perform the build, run the following command:

```bash
docker build . -t my-demo-app
```

The dot refers to the folder where we are standing, as that is where the Dockerfile is located. The `-t` parameter is used to declare a tag or name of our image.

## Running the container

Finally, when our image is ready, we can run the following command to launch a container and see it in action:

```bash
docker run --rm -d -p 3002:3002 my-demo-app
```

The `--rm` parameter removes the container when it stops. The `-d` (detach) parameter releases the terminal prompt. The `-p` parameter is used to expose port 3002 and make it accesible from outside the container.

All that remains is to access http://localhost:3002 and verify that we can see the intended "hello world" message.
