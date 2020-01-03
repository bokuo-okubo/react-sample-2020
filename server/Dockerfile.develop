FROM node:10

WORKDIR /usr/app

COPY package.json /usr/app
COPY yarn.lock /usr/app

COPY . /usr/app

RUN yarn --frozen-lockfile

CMD yarn run start:dev
