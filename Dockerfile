# Use the official Node.js image as the base image
FROM node:lts

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install Prisma
RUN npm install prisma

# Generate Prisma client
RUN npx prisma generate

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm","run","start"]
