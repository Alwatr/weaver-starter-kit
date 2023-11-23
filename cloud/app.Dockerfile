FROM docker.io/library/node:20-alpine as builder

ARG siteUrl=/
ARG noIndex=0

WORKDIR /app

ENV MY_ENVIRONMENT production
ENV siteUrl $siteUrl
ENV noIndex $noIndex

RUN apk add --no-cache git

# Install dependencies
COPY . .
RUN if [ -f *.lock ]; then \
      yarn install --immutable; \
    else \
      yarn install; \
    fi;

ENV NODE_ENV production

# Build all ts files
RUN yarn build:ts

# Build target package
ARG packageSource
RUN set -ex;\
    if [ -z "${packageSource}" ]; then\
      echo 'packageSource not defined'>&2;\
      exit 1;\
    fi;
RUN set -ex;\
    cd "${packageSource}"; pwd; ls -lahF;\
    yarn build;

# ---

FROM ghcr.io/alwatr/nginx-ws:1.1.1 as app

# Copy builded files from last stage
ARG packageSource
COPY ${packageSource}/dist ./dist

# RUN pwd; ls -lAhF;
