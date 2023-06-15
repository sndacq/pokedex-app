# Pokedex App

> A pokedex app built using [Next.js](https://nextjs.org/) and [PokeAPI](https://pokeapi.co/)

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To run lint for the codebase:

```bash
npm run lint:fix
```

To run unit tests:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app uses [axios cache interceptor](https://github.com/arthurfiorette/axios-cache-interceptor) to handle caching of API requests.
[Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) is used for writing unit tests.

## Deployed on Vercel

Check out the app [here](https://pokedex-app-sndacq.vercel.app/)!