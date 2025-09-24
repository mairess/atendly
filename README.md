# Atendly

## Configurations to run

### 1 - Install front and backend dependencies

   ```bash
   npm install  # inside backend directory
   ```

   ```bash
   npm install  # inside frontend directory
   ```

### 2 - Create the `.env` file from `.env.example` on `backend` directory

   Before running the containers, create the `.env` file in `backend` directory. Example:

   ```env
   DB_HOST=localhost
   DB_NAME=atendly_db
   DB_USER=root
   DB_PASS=password
   JWT_SECRET=superSecret123
   PORT=3001
```

### 3 - Run containers

```BASH
docker compose up -d
```

# Tree

```bash
.
├── backend
│   ├── Dockerfile
│   ├── eslint.config.mts
│   ├── package.json
│   ├── package-lock.json
│   ├── sequelize.config.js
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── userController.ts
│   │   ├── database
│   │   │   ├── config
│   │   │   │   └── database.ts
│   │   │   └── models
│   │   │       └── UserSequelizeModel.ts
│   │   ├── interfaces
│   │   │   ├── ILogin.ts
│   │   │   ├── IMe.ts
│   │   │   ├── IToken.ts
│   │   │   └── IUser.ts
│   │   ├── middleware
│   │   │   └── auth.ts
│   │   ├── migrations
│   │   │   └── 01-create-users.ts
│   │   ├── models
│   │   │   └── userModel.ts
│   │   ├── services
│   │   │   └── userService.ts
│   │   └── utils
│   │       ├── jwt.ts
│   │       ├── mapStatus.ts
│   │       ├── ServiceResponse.ts
│   │       └── userValidator.ts
│   └── tsconfig.json
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── env.d.ts
│   ├── eslint.config.ts
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   │   └── favicon.ico
│   ├── README.md
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   └── main.css
│   │   ├── components
│   │   ├── main.ts
│   │   ├── router
│   │   │   └── index.ts
│   │   ├── services
│   │   │   └── api.ts
│   │   ├── stores
│   │   │   └── auth.ts
│   │   └── views
│   │       ├── UserLogin.vue
│   │       ├── UserProfile.vue
│   │       └── UserRegister.vue
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── package.json
├── package-lock.json
└── README.md
```
