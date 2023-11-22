# The base image is a light one with node and npm
FROM node:16-alpine
# Defining a work directory
WORKDIR /app
# Installing dependencies
COPY package.json .
RUN npm install
# Copying app files inside the container
COPY . .
# Exposing the app port
EXPOSE 3002
# Starting the app
CMD [ "node", "app.js" ]
