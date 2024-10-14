FROM ghcr.io/alwatr/node:22.9.0 AS builder

RUN set -ex; \
  apk add --no-cache git; \
  corepack enable;

COPY package.json yarn.lock ./
COPY packages/alwatr/package.json packages/alwatr/
COPY packages/api/packag.json packages/api/
COPY packages/app/packag.json packages/app/
COPY packages/common/package.json packages/common/
COPY packages/windstyle/packag.json packages/windstyle/

RUN yarn install;

COPY . .

RUN set -eux; \
  yarn install --immutable; \
  yarn build; \
  ls -lahF .; \
  ls -RlahF /app/packages/api;

# ---

FROM ghcr.io/alwatr/node:22.9.0
LABEL org.opencontainers.image.base.name="ghcr.io/alwatr/node:22.9.0"

COPY --from=builder /app/packages/api/dist/ .
# RUN set -ex; \
#   corepack enable; \
#   npm install sharp;
# RUN set -eux; ls -RlahF /app;

# ENV NODE_OPTIONS --enable-source-maps
ENV host="0.0.0.0" \
    port="80"

EXPOSE 80

CMD ["node", "main.mjs"]
