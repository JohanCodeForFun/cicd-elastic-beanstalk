FROM node:20
FROM mcr.microsoft.com/playwright:focal
 
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install-deps

RUN npx playwright install

COPY . .
