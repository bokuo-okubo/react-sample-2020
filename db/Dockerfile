ARG MONGO_TAG=latest
ARG MONGO_INIT_SCRIPT="db.createUser({user: \"react-user\",pwd: \"passw0rd\", roles: [{role: \"readWrite\",db: \"react-sample\"}]});"

FROM mongo:${MONGO_TAG}

ARG MONGO_INIT_SCRIPT
RUN echo ${MONGO_INIT_SCRIPT} > /docker-entrypoint-initdb.d/mongo-init.js
