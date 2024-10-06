FROM ghcr.io/alwatr/node:22.9.0 AS builder

RUN set -ex; apk add --no-cache git
RUN set -ex; corepack enable;

COPY . .

RUN set -eux; \
  yarn install --immutable; \
  yarn build; \
  ls -lahF .; \
  ls -RlahF /app/packages/api;

# ---

FROM ghcr.io/alwatr/node:22.9.0
LABEL org.opencontainers.image.base.name="ghcr.io/alwatr/node:21.7.1"

COPY --from=builder /app/packages/api/dist/ .
# RUN set -eux; ls -RlahF /app;

# ENV NODE_OPTIONS --enable-source-maps
ENV host="0.0.0.0" \
    port="80"

EXPOSE 80

CMD ["node", "main.mjs"]

