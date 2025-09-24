FROM node:20-slim

WORKDIR /backend

COPY package*.json ./

RUN npm install

EXPOSE 3001

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]
