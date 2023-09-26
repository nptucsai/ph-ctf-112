FROM php:7.4-apache

RUN apt update
RUN apt install -qy cowsay fortune
ENV PATH="${PATH}:/usr/games"

WORKDIR /
ARG FLAG
ARG FLAG_FILE
RUN echo $FLAG >> $FLAG_FILE

WORKDIR /var/www/html
COPY . .

RUN chmod 444 /$FLAG_FILE
RUN chmod -R 555 /var/www/html
