# Use the "node:20" and "mcr.microsoft.com/playwright:focal" images as base images.
FROM node:20
FROM mcr.microsoft.com/playwright:focal
 
# Set the working directory inside the container.
WORKDIR /app

# Copy "package.json" and "yarn.lock" from the current directory to the working directory inside the container.
COPY package*.json ./

# Install the dependencies listed in "package.json" and "yarn.lock".
RUN npm install

# Install the system dependencies needed by Playwright.
RUN npx playwright install-deps

# Install the Playwright CLI.
RUN npx playwright install
