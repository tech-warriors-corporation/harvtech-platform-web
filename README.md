<p align="center">
    <img align="center" src="./public/images/logo.svg" width="120px" alt="HarvTech logo" />
    <br>
    <h1 align="center">HarvTech (Web platform)</h1>
    <p align="center">The platform project to manage cultivation in HarvTech.</p>
    <p align="center">
        <img align="center" src="https://api.netlify.com/api/v1/badges/2e789c67-a9a2-4212-98c6-ff19b0b803bd/deploy-status" alt="Netlify deploy status" />
        <a href="https://github.com/prettier/prettier"><img align="center" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Code style is Prettier" /></a>
        <a href="https://github.com/tech-warriors-corporation/harvtech-platform-web/blob/main/LICENSE"><img align="center" src="https://img.shields.io/github/license/tech-warriors-corporation/harvtech-platform-web" alt="GitHub license" /></a>
        <img align="center" src="https://img.shields.io/github/repo-size/tech-warriors-corporation/harvtech-platform-web" alt="GitHub repository size" />
    </p>
</p>

<hr>

## Production
The [HarvTech production URL](https://harvtech.netlify.app), access to see the project.

## Install prerequisites
1. [NodeJS and NPM](https://nodejs.org/en/download).
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install).

## Setup project
Follow all commands bellow.

### Environment
Create **.env** file in **root** folder with content.
```
VITE_BASE_URL=<set base URL 🔑>
VITE_API_URL=<set API URL 🔑>
```

### Install packages
```
yarn
```

### Active Husky hooks (if not automatically configured)
```
yarn prepare
```

### Start
```
yarn dev
```

### Build
```
yarn build
```

### Preview
```
yarn preview
```

## Setup JetBrains (IDE)

### Configure Lint
Go to `File > Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`, select **Automatic ESLint configuration** and check **Run eslint --fix on save**, or read the [ESLint documentation for WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html).

### Configure Prettier
Go to `File > Settings > Languages & Frameworks > JavaScript > Prettier`, check **On 'Reformat Code' action** and check **On save**, or read the [Prettier documentation for WebStorm](https://www.jetbrains.com/help/webstorm/prettier.html).

## Lint
Run commands:

### Check
```
yarn lint
```

### Fix
```
yarn lint:fix
```

## Prettier
Run commands:

### Check
```
yarn prettier
```

### Fix
```
yarn prettier:fix
```

## Format code
```
yarn format
```

## Cypress
- You should use the `data-cy` attribute to select elements in your tests.
- File should be called as `*.spec.cy.(ts|tsx)`.
- Read the [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress).
```
cypress:open
```
and
```
cypress:check
```

## About file names
Helpers, components, pages and others files should be very specific in file names.

## Prototype of components, colors, fonts and others
You can access [our Figma project](https://www.figma.com/proto/PpsZVwe459CmUD76YnPbqJ/HarvTech?node-id=256-280&t=NirCfSXcluKA1giG-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=256%3A280).

## Roadmap
- [X] Upload in [Netlify](https://www.netlify.com).
- [X] Add a router in project.
- [X] Configure environment variables in [Netlify](https://www.netlify.com).
- [X] Create a prototype in [Figma](https://www.figma.com) and document here.
- [X] Add [Axios](https://axios-http.com).
- [ ] Add and create components with [Ariakit](https://ariakit.org).
- [ ] Add different languages.
- [ ] Style noscript.
- [ ] Maybe use IoT components.
- [ ] Upload in Azure.
- [ ] Code Coverage with Cypress.
- [ ] Read about maps for mark points and monitoring in farming (satellite JS library), like [Satellite (GitHub)](https://github.com/shashwatak/satellite-js) and [Satellite (YouTube)](https://www.youtube.com/watch?v=SctXG86xPw0).
- [ ] Review project.
- [ ] Add [Rollbar](https://rollbar.com).

## Thanks for read
Product made by **[Tech Warriors](https://github.com/tech-warriors-corporation)**.
