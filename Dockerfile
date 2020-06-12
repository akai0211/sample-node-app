FROM node:12.2.0-alpine

WORKDIR /opt/app

COPY . .

RUN npm install

# Expose port 3000 to the network
EXPOSE 3000

CMD ["npm", "start", "--"]
