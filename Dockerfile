# Install dependencies only when needed
FROM node:18 AS deps
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18 AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodecore

RUN chown nodecore:nodejs /app

USER nodecore
RUN ls
RUN yarn start

ENV NODE_ENV production

EXPOSE 8777

ENV PORT 8777

CMD ["yarn", "start"]
