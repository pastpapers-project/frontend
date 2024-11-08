# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lighter image to serve the app
FROM node:20-lts AS runner

# Set working directory
WORKDIR /app

# Copy only the build files and node_modules from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Set environment variable
ENV NODE_ENV production

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
