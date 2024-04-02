FROM ghcr.io/alwatr/node:21.7.1 as builder

RUN apk add --no-cache git;
RUN set -ex; corepack enable;

ARG siteUrl=${siteUrl}
ENV siteUrl $siteUrl

COPY . .

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
