FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3001

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]
