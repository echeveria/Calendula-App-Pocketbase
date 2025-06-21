# PocketBase Docker Container

This directory contains the necessary files to build and run a PocketBase server in a Docker container.

## Building the Docker Image

To build the Docker image, run the following command from this directory:

```bash
docker build -t pocketbase .
```

## Running the Docker Container

To run the Docker container, use the following command:

```bash
docker run -p 8090:8090 -v ./pb_data:/pb_data pocketbase
```

This will start the PocketBase server and expose it on port 8090. The data will be stored in the `pb_data` directory, which is mounted as a volume in the container.

## Environment Variables

You can customize the admin user by setting the following environment variables:

- `ADMIN_USER`: The email address of the admin user (default: admin@example.com)
- `ADMIN_PASS`: The password of the admin user (default: adminadmin)

Example:

```bash
docker run -p 8090:8090 -v ./pb_data:/pb_data -e ADMIN_USER=your-email@example.com -e ADMIN_PASS=your-password pocketbase
```

## Accessing the PocketBase Admin UI

Once the container is running, you can access the PocketBase Admin UI at http://localhost:8090/_/.

Log in with the admin user credentials (default: admin@example.com / adminadmin).