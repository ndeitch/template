FROM node:14.11.0-alpine3.11 as build

WORKDIR /usr/src/app

COPY package*.json .env ./

RUN npm install --silent

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:14.11.0-alpine3.11 as production

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/.env .
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main"]
