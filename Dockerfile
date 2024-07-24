# Koristi Node.js kao osnovni image
FROM node:14

# Postavi radni direktorijum
WORKDIR /usr/src/app

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj ostatak aplikacije
COPY . .

# Izloži port aplikacije
EXPOSE 3333

# Definiši komandnu za pokretanje aplikacije
CMD ["node", "app.js"]
