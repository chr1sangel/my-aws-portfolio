# Stage 1: Build the React/Vite application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build it
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
# Copy the built assets from Stage 1 into Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Port 80 to the outside world
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
