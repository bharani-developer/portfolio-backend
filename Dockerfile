# syntax=docker/dockerfile:1

##############################
# Stage 1 - Dependencies
##############################
FROM node:22-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci

##############################
# Stage 2 - Build
##############################
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

##############################
# Stage 3 - Production
##############################
FROM node:22-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

# Install only production dependencies
# Ignore lifecycle scripts such as "prepare"
RUN npm ci --omit=dev --ignore-scripts \
    && npm cache clean --force

# Copy compiled application
COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/app/server.js"]