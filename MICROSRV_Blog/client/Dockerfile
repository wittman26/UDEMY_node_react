# Use an existing Image as base
FROM node:alpine

# Fix a bug to run in a container
ENV CI=true

# Create app directory
WORKDIR /app
# Copy every package.json
COPY package*.json ./
# Install app dependencies  
RUN npm ci
# Bundle app source
COPY . .

CMD [ "npm", "start" ]