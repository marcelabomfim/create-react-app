# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

---

## Usage

`npx create-react-app --scripts-version marcelabomfim-react-scripts project-name`

## What is included ?

- All advantages from [facebook/create-react-app](https://github.com/facebook/create-react-app)
- styled-components
- react-router-dom
- redux
- react-redux
- redux-logger
- redux-promise
- redux-thunk
- husky
- lint-staged
- prettier

## Tree structure

```
- public
- build
- node_modules
- src
    |_ assets
    |_ components
        |_ MyComponent
            |_ index.js                 // export component
            |_ MyComponent.jsx          // jsx extension for all react files
            |_ MyComponent.styles.jsx   // styles with styled-components
    |_ containers
        |_ MyContainer
            |_ index.js                 // export container
            |_ MyContainer.jsx          // .jsx extension for all react files
            |_ MyContainer.styles.jsx   // styles with styled-components
    |_ store
        |_ actions
            |_ ActionTypes.js           // export actions constants
            |_ Example.actions.js
        |_ reducers
            |_ Example.reducer.js
            |_ index.js                 // combine reducers
        |_ index.js                     // initialize and setup store
    |_ utils
        |_ styles
            |_ global.js                // all global styles
            |_ helpers.js
    |_ App.jsx
    |_ index.js
- .env
- .prettierrc
```

---

> For more details see the original [create-react-app repository](https://github.com/facebook/create-react-app)
