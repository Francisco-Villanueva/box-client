FROM node:alpine

WORKDIR /app-client-coworkers

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]