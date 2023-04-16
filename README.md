# Next.js TypeScript Tailwind Starter

This is a starter template for building a web app with Next.js, TypeScript, and Tailwind CSS. The app supports rendering client-side, server-side, and static pages. It also includes Jest, React Testing Library, Prettier, ESLint, and Husky for testing, formatting, linting, and Git hooks.

## Getting started

First, clone the repository and install dependencies:

```shell
git clone https://github.com/yourusername/your-repo.git
cd your-repo
yarn
```

Then, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- TypeScript
- Tailwind CSS
- Jest
- React Testing Library
- Prettier
- ESLint
- Husky
- Supports two themes: light and dark
- Supports client-side, server-side, and static rendering

## File structure

The app follows the standard Next.js file structure:

- `pages/`: Contains the pages of the app.
- `public/`: Contains the static assets of the app.
- `styles/`: Contains the global styles of the app.
- `components/`: Contains the reusable components of the app.
- `utils/`: Contains the utility functions of the app.

## Themes

The app includes two themes: light and dark. You can switch between them by clicking on the toggle button in the header. The theme is stored in the browser's local storage, so it persists across page reloads.

## Rendering modes

The app supports three rendering modes:

- Client-side rendering (CSR): The page is rendered on the client using JavaScript.
- Server-side rendering (SSR): The page is rendered on the server using Node.js.
- Static site generation (SSG): The page is pre-rendered at build time and served as a static file.

You can switch between the rendering modes by clicking on the buttons in the header. The current mode is displayed in the footer.

## Testing

The app includes Jest and React Testing Library for testing. You can run the tests with:

yarn test

arduino
Copy code

The app also includes Prettier and ESLint for formatting and linting. You can run them with:

yarn format
yarn lint

markdown
Copy code

The app also includes Husky for Git hooks. The `pre-commit` hook runs Prettier and ESLint before committing.

## License

This app is licensed under the MIT license. See [LICENSE.md](./LICENSE.md) for details.
