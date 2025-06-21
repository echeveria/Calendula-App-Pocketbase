# Stage 2: Build pocketbase base iamge
FROM debian:stable-slim as pocket-base
WORKDIR /pb
RUN apt-get update && apt-get install -y curl unzip
RUN curl -LO https://github.com/pocketbase/pocketbase/releases/download/v0.25.8/pocketbase_0.25.8_linux_amd64.zip && unzip *.zip


# Stage 3: Build runtime image
FROM debian:stable-slim
WORKDIR /pocketbase
COPY --from=pocket-base /pb/pocketbase .
RUN chmod +x ./pocketbase
COPY ./pb_migrations pb_migrations
COPY setup-and-start-pocketbase.sh .
VOLUME /pb_data
EXPOSE 8090
CMD ["/app/setup-and-start-pocketbase.sh"]