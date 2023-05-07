# Använd en Node.js-basbild som grund
FROM node:18-alpine

# Skapa en mapp för appen
WORKDIR /app

# Kopiera paketfilerna och installera dependencies
COPY package*.json ./
RUN npm install

# Kopiera resten av appens filer
COPY . .

# Exponera appens port
EXPOSE 3000

# Starta appen när containern körs
CMD ["npm", "run", "start:prod"]