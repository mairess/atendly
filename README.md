# atendly

## To Tun

**Create the `.env` file from** `.env.example`

   Before running the containers, create a `.env` file in the root directory of the project with the necessary environment variables. Example:

   ```env
   DB_HOST=localhost
   DB_NAME=atendly_db
   DB_USER=root
   DB_PASS=password
   JWT_SECRET=superSecret123
   PORT=3001
```

**Run containers:**

```BASH
docker compose up -d
```
