# atendly

## To Tun

**Create the `.env` file from** `.env.example`

   Before running the containers, create a `.env` file in the root directory of the project with the necessary environment variables. Example:

   ```env
   DB_HOST=db
   DB_PORT=5432
   DB_USER=user
   DB_PASSWORD=password
   DB_NAME=atendly_db
```

**Run containers:**

```BASH
docker compose up -d
```
