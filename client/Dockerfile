ARG NGINX_TAG=alpine
ARG REACT_APP_ENDPOINT_URL=foobar
ARG BUILD_HOME=/usr/app

# ------------
FROM node:10 AS builder
ARG BUILD_HOME
ARG REACT_APP_ENDPOINT_URL

WORKDIR ${BUILD_HOME}

COPY package.json ${BUILD_HOME}
COPY yarn.lock ${BUILD_HOME}
COPY . ${BUILD_HOME}

RUN yarn --frozen-lockfile

ENV NODE_ENV=production
ENV REACT_APP_ENDPOINT_URL=${REACT_APP_ENDPOINT_URL}

RUN ["yarn", "run", "build"]

# ------------
FROM nginx:${NGINX_TAG}
ARG NGINX_TAG
ARG BUILD_HOME

RUN echo "nginx:${NGINX_TAG}" > /docker-image-tag && cat /docker-image-tag && rm /docker-image-tag
COPY --from=builder ${BUILD_HOME}/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]