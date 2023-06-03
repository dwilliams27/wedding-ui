FROM node:15-alpine AS builder

WORKDIR /app

COPY package.json package.json

ENV HUSKY=0

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
