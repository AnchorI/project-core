FROM node:18

ARG NODE_ENV
ARG API_VERSION
ARG JWT_SECRET
ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_PASS
ARG DB_NAME
ARG APP_PORT

ENV NODE_ENV $NODE_ENV
ENV API_VERSION $API_VERSION
ENV JWT_SECRET $JWT_SECRET
ENV POSTGRES_HOST $DB_HOST
ENV POSTGRES_PORT $DB_PORT
ENV POSTGRES_USER $DB_USER
ENV POSTGRES_PASSWORD $DB_PASS
ENV POSTGRES_DATABASE $DB_NAME
ENV PORT $APP_PORT

WORKDIR /app

EXPOSE $APP_PORT

COPY . .

RUN yarn install

CMD ["yarn", "server"]
