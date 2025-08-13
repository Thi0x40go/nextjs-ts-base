FROM node:20-alpine AS builder
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:20-alpine AS runner
ENV NODE_ENV=production

COPY --from=builder /package*.json ./
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /.next ./.next
COPY --from=builder /public ./public

EXPOSE 3000

CMD ["npm", "start"]
