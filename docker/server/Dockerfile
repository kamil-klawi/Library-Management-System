FROM node:22.14-alpine AS build

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .

FROM node:22.14-alpine AS development

WORKDIR /app

COPY --from=build /app .

RUN npm install --only=development

EXPOSE 5000

CMD ["nodemon", "--exec", "ts-node", "src/index.ts"]
