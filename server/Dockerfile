FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
#RUN npm install mongoose

EXPOSE 3001

CMD ["npm", "start"]