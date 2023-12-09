FROM ghcr.io/alwatr/node:20.10.0 as builder

RUN apk add --no-cache git

RUN set -ex; corepack enable;

COPY . .

ENV NODE_ENV production
RUN set -eux; \
  yarn install --immutable; \
  yarn build;

# ---

FROM ghcr.io/alwatr/nginx-ws:2.0.2

COPY --from=builder /app/packages/app/dist/ .
RUN set -eux; ls -RlahF /data;

LABEL org.opencontainers.image.base.name="ghcr.io/alwatr/nginx-ws:2.0.2"
