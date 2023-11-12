FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "dev" ]