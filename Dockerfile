FROM node:18.13.0 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install
COPY ./dist ./build

FROM nginx:1.15.9-alpine

EXPOSE 8080

COPY --from=builder /usr/src/app/build /usr/share/nginx/html