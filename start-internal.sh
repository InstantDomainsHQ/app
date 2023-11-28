#!/usr/bin/env bash

docker-compose -f dev-ops/deno/internal/docker-compose.yml down -v
docker-compose -f dev-ops/deno/runtime/docker-compose.yml down -v
docker-compose -f dev-ops/deno/runtime/proxy/docker-compose.yml down -v
docker-compose -f dev-ops/redis/docker-compose.yml down -v

# Setup dependencies
docker network create internal_net
docker-compose -f dev-ops/deno/runtime/proxy/docker-compose.yml up -d
docker-compose -f dev-ops/deno/internal/docker-compose.yml up -d
docker-compose -f dev-ops/deno/runtime/docker-compose.yml up -d
docker-compose -f dev-ops/redis/docker-compose.yml up -d

# Copy CA certificates
 docker cp fh_proxy:/home/mitmproxy/.mitmproxy ~
