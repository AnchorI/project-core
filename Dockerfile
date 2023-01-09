FROM node:18

# создание директории приложения
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]