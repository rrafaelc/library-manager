# Description

Todo

# Pré requisitos

- Node.js v16 ou superior
- Docker Desktop
- DBeaver (use o que preferir)

# Iniciando com o docker

```
docker run --name {nome do container} -e POSTGRES_PASSWORD={password do banco} -p 5432:5432 -d postgres
```

# Execute as migrations

1. Gere as migrations em dev

```
npm run prisma:generate
```

2. Execute as migrations em dev

```
npm run prisma:migrate
```

3. Formate o prisma.schema

```
npm run prisma:format
```

4. Deploy

```
npm run prisma:build
```

# Executar

Para rodar o app, use

```
npm run start
```
