FROM node:14 as develop-stage
MAINTAINER Berk İpekoğlu
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
CMD [ "node", "server.js"]