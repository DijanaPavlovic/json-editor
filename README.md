# JSON Editor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start / yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test / yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build / yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Navigation throughout the project

When the project is started there is only one page where user can update data.

Project renders JSON examples which are inside src/examples folder.
There are 2 JSON examples, 2nd is much bigger.

There are 2 versions of main screen. One (that is shown by default) is using virtual scroll library (react-virtuoso).
The other one is JSON renderer and editor without virtual scroll.

Choosing between these 2 options can be done inside App.tsx by importing the right component.

Components prefixed with `Item` handles one Item which corresponds to one object from initial array of objects.
