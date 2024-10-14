FROM ghcr.io/alwatr/node:20.18.0 AS builder

RUN apk add --no-cache git;
RUN set -ex; corepack enable;

COPY package.json yarn.lock ./
COPY packages/alwatr/package.json packages/alwatr/
COPY packages/api/package.json packages/api/
COPY packages/app/package.json packages/app/
COPY packages/common/package.json packages/common/
COPY packages/windstyle/package.json packages/windstyle/

RUN yarn install;

COPY . .

ARG siteUrl=${siteUrl}
ENV siteUrl=${siteUrl}

RUN set -eux; \
  yarn install --immutable; \
  yarn build; \
  ls -lahF .; \
  ls -RlahF /app/packages/app;

# ---

FROM ghcr.io/alwatr/nginx-ws:2.5.0
LABEL org.opencontainers.image.base.name="ghcr.io/alwatr/nginx-ws:2.5.0"

COPY --from=builder /app/packages/app/dist/ .
# RUN set -eux; ls -RlahF /data;
