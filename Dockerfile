# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your application's code
COPY . .

# Build your application
RUN yarn build

# Expose port 3000 to the outside
EXPOSE 3000

# Start your application
CMD ["yarn", "start"]
