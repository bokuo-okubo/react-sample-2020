ARG NGINX_TAG=alpine

FROM nginx:${NGINX_TAG}

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
