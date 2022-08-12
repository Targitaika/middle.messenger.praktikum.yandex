FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm && apt npm i
WORKDIR /var/www
COPY ./dist dist
EXPOSE 3000
CMD npm run parcelDev