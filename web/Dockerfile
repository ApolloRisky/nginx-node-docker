FROM node:18-alpine3.18 AS builder

# Create app directory
WORKDIR /app
COPY . .

RUN npm ci

FROM node:18-alpine3.18
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js ./

CMD [ "npm", "start" ]
