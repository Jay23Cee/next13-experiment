# Use the official Node.js image as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Generate Prisma client code
RUN npx prisma generate

# Build the Next.js project
RUN npm run build

# Set the command to start the app
CMD ["npm", "run", "start"]
