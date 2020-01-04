FROM node:10 AS builder

WORKDIR /usr/app

COPY package.json /usr/app
COPY yarn.lock /usr/app

COPY . /usr/app

RUN yarn --frozen-lockfile

RUN yarn run build

# ----------------------------

FROM node:10-alpine

WORKDIR /www
COPY --from=builder /usr/app/dist /www/dist
COPY --from=builder /usr/app/package.json /www
COPY --from=builder /usr/app/yarn.lock /www

RUN yarn install --production

ENV NODE_ENV=production

CMD ["yarn", "run", "start:prod"]