FROM node

WORKDIR /app

COPY package.json /app/

RUN yarn init -2

COPY . .

CMD ["yarn", "start"]
