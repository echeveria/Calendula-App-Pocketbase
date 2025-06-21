# Dockerfile for PocketBase server
# This Dockerfile creates a container that runs PocketBase server
# with an admin user and exposes it on port 8090.

# Stage 1: Build pocketbase base image
FROM debian:stable-slim as pocket-base
WORKDIR /pb
RUN apt-get update && apt-get install -y curl unzip
RUN curl -LO https://github.com/pocketbase/pocketbase/releases/download/v0.25.8/pocketbase_0.25.8_linux_amd64.zip && unzip *.zip


# Stage 2: Build runtime image
FROM debian:stable-slim
WORKDIR /pocketbase
COPY --from=pocket-base /pb/pocketbase .
RUN chmod +x ./pocketbase
COPY ./pb_migrations pb_migrations
COPY setup-and-start-pocketbase.sh .
RUN chmod +x ./setup-and-start-pocketbase.sh
VOLUME /pb_data
EXPOSE 8090
CMD ["/pocketbase/setup-and-start-pocketbase.sh"]
