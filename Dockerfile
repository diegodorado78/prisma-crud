FROM node:18.18-alpine

# Establece el directorio de trabajo en la raíz del contenedor
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto a la raíz del contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
