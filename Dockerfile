FROM node:18 AS build-env
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev --ignore-scripts

FROM gcr.io/distroless/nodejs:18
COPY --from=build-env /app/src /app/src
COPY --from=build-env /app/node_modules /app/node_modules
WORKDIR /app
CMD ["src/index.js"]
