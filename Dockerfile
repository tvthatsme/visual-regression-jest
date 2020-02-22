FROM buildkite/puppeteer:latest

RUN mkdir /app
WORKDIR /app

COPY package*.json .babelrc jest.config.js ./
RUN npm ci
COPY . .
