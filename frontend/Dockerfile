FROM node:20-slim

WORKDIR /frontend

COPY package*.json ./

RUN npm install

EXPOSE 5173

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]