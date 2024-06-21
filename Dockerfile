# Stage 1: Build React application
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy source code
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Serve React application with Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy build files from stage 1
COPY --from=build /app/dist ./build

# Install serve globally to serve the build folder
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]
