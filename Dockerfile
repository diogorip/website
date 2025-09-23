FROM denoland/deno:2.5.1 AS build
WORKDIR /app

COPY package.json deno.lock ./

RUN deno install

COPY . .

RUN deno task build

FROM denoland/deno:2.5.1 AS production
WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 8085/tcp
ENTRYPOINT [ "deno", "run", "-A", "./server/entry.mjs" ]
