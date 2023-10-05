FROM nginx:1.24-alpine-slim

WORKDIR /AAChat
COPY AAChat .

WORKDIR /etc/nginx
COPY _proxy .