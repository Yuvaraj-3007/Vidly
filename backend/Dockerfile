FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY --chown=app:app package*.json ./
RUN chown -R app:app /app
USER app
RUN npm install

COPY --chown=app:app . .
RUN chmod +x docker-entrypoint-standalone.sh docker-entrypoint.sh wait-for

EXPOSE 3001

CMD ["npm", "start"]