FROM node:10.15 as builder


RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app/
RUN PUBLIC_URL=/app yarn build
RUN find /app -name '*.map' -delete

FROM nginx

# sources
WORKDIR /app
COPY --from=builder /app/dist/index.html /app/

COPY default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
