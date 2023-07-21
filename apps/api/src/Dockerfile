FROM node:18.13.0-alpine

WORKDIR /app

RUN chown node:node -R /app

USER node

COPY src .

RUN yarn

CMD node main

EXPOSE 4000
