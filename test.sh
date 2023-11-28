#!/usr/bin/env bash

# Setup dependencies
docker network create internal_net
docker-compose -f dev-ops/postgres/docker-compose.yml up -d
docker-compose -f dev-ops/deno/internal/docker-compose.yml up -d
docker-compose -f dev-ops/deno/runtime/docker-compose.yml up -d
docker-compose -f dev-ops/redis/docker-compose.yml up -d

# Run the tests
docker-compose -f docker-compose-test.yml up --force-recreate --build

# Teardown
docker-compose -f dev-ops/postgres/docker-compose.yml down -v
docker-compose -f dev-ops/deno/internal/docker-compose.yml down -v
docker-compose -f dev-ops/deno/runtime/docker-compose.yml down -v
docker-compose -f dev-ops/redis/docker-compose.yml down -v
docker-compose -f docker-compose-test.yml down -v
