# Template

### Checklist

- [] Find and replace: template
- [] Add FIREBASE_TOKEN to repository's secret
- [] Replace staging and production keys in .firebaserc
- [] Uncomment develop.yml and main.yml firebase deploy

Strongly opinionated template with:

- NestJS
- MongoDB
- Jest
- Testdeck
- Prettier
- Eslint
- Release It
- Firebase

### Running Locally

Start docker:

```sh
docker compose up -d
```

Start service:

```sh
npm run dev
```

### Running Tests

Start docker:

```sh
docker compose up -d
```

Start service:

```sh
npm t
```
