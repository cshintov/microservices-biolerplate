FROM node:15.4.0-alpine as builder
WORKDIR /app

COPY ./package.json .
RUN npm install -g ionic
RUN npm install
COPY . .
RUN ionic build --prod

FROM nginx
EXPOSE 8000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/www /usr/share/nginx/html
