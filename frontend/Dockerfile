FROM node:alpine AS builder
RUN apk update && apk upgrade && apk add bash
RUN npm install -g pnpm
COPY ./ ./
RUN npm install --legacy-peer-deps
RUN npm run build

FROM node:alpine AS runner

ENV NODE_ENV=production
RUN npm install -g pm2
COPY --from=builder .next ./.next
COPY --from=builder public ./public
COPY --from=builder node_modules ./node_modules
COPY --from=builder package.json ./

EXPOSE 3000
USER node
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]