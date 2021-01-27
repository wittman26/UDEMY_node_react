# Use an existing Image as base
FROM node:alpine

# Create app directory
WORKDIR /app
# Copy every package.json
COPY package*.json ./
# Install app dependencies  
RUN npm ci
# Bundle app source
COPY . .

CMD [ "npm", "start" ]