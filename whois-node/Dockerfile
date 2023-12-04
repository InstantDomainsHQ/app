FROM node:alpine
RUN apk update && apk upgrade && apk add bash
RUN npm install -g pm2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
ENV NODE_ENV=production
EXPOSE 4000

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]