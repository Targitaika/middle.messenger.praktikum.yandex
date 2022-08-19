FROM node:latest
WORKDIR /var/www
COPY . ./
EXPOSE 3000
CMD npm install
CMD npm run start