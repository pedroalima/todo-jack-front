FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

EXPOSE 5173

CMD [ "npm", "run", "dev" ]