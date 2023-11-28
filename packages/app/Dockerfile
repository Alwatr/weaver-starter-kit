FROM ghcr.io/alwatr/node:20.10.0 as builder

RUN apk add git --no-cache

RUN set -ex; corepack enable;

COPY . .

ENV NODE_ENV production
RUN set -eux; \
  yarn install --immutable; \
  yarn build;

# ---

FROM ghcr.io/alwatr/nginx-ws:2.0.1

LABEL org.opencontainers.image.base.name="ghcr.io/alwatr/nginx-ws:2.0.1"

COPY --from=builder /app/packages/app/dist/ .
RUN set -eux; ls -RlahF /app;
