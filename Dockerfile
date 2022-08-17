FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY / project
EXPOSE 8080
CMD cd project
CMD npm install
CMD npm run start