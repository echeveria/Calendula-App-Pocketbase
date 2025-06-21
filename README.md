# PocketBase Docker Container

This directory contains the necessary files to build and run a PocketBase server in a Docker container.

## Backing Up PocketBase Data

To backup PocketBase data from a remote server, use the provided backup script:

```bash
./backup-pocketbase-data.sh
```

By default, the script will backup data from `root@angelator312.top:/pb_data/*` to the local `pb_data` directory.

You can customize the backup process by setting the following environment variables:

- `REMOTE_HOST`: The hostname of the remote server (default: angelator312.top)
- `REMOTE_USER`: The username to use for SSH connection (default: root)
- `REMOTE_PATH`: The path to the PocketBase data on the remote server (default: /pb_data/)
- `LOCAL_PATH`: The local path to store the backup (default: ./pb_data)

Example:

```bash
REMOTE_HOST=myserver.com REMOTE_USER=admin ./backup-pocketbase-data.sh
```

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
