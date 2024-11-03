# Use an official node image as the base image
FROM node:20-alpine
FROM mcr.microsoft.com/playwright:focal

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npx playwright install-deps
RUN npx playwright install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Command to run the app
CMD ["npm", "run", "preview"]