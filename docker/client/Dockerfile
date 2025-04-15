FROM node:22.14-alpine AS build

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client/ .

FROM node:22.14-alpine AS development

WORKDIR /app

COPY --from=build /app .

RUN npm install --only=development

EXPOSE 3000

CMD ["npm", "run", "dev"]