# Build Dashboard :: A Modern React, Redux, React Router 4, Webpack Sample App

![React, Redux, Router, Webpack, Sass](https://cloud.githubusercontent.com/assets/733074/25338311/193a1a40-28ff-11e7-8f22-9a5d9dac7b84.png)

Production-ready React + Webpack architecture implemented on consumer web apps of some of the most successful enterprises in the world.


![Build Dashboard App](<img src="screenshots/build-dashboard.png" alt="build dashboard"/>)

## Folder structure:
The folder consists of three directories:
* `video` - A video demonstration of the Build Items app
* `code` - contain the code for this excercise
* `screenshots` - containing screenshots of the application

Also within the project is the stubbed backend call located in 
`build-dashboard/app/data.json` with is used to power the frontend.

## Stack
The app was built using these aweseome technologies

- [x] [Webpack 3.5](https://webpack.github.io)
- [x] [React 16.x](https://facebook.github.io/react/)
- [x] [Redux](http://redux.js.org/)
- [x] [React Router 4](https://reacttraining.com/react-router/)
- [x] [Babel](https://babeljs.io/)
- [x] [Jest](https://facebook.github.io/jest/)
- [x] [Yarn](https://yarnpkg.com/en/) 🐣
- [x] [Sass](http://sass-lang.com/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)


## Getting started
From the root of the application

```sh
 $ cd ./code/build-dashboard
 ```
Depending on your favorite, you can use `yarn` scripts or `npm` scripts defined below

## Yarn Scripts

* `yarn` - install dependencies
* `yarn start` - run development server (I have wired up the start command to run lint, then run tests serving the bundle file over localhost)
* `yarn test` - to run all unit tests

## NPM Scripts
Similar to Yarn, really...

* `npm install` - install dependencies
* `npm start` - run development server (I have wired up the start command to run lint, then run tests serving the bundle file over localhost)
* `npm run test` - run unit tests


## Viewing App
Once the project is succesfully compiled, After running either all of yarn npm scripts above,  you will see something like
```sh
Project is running at http://localhost:3000/
webpack output is served from /
Content not from webpack is served from ./app
404s will fallback to /index.html
```

App can be viewed on `http://localhost:3000/`

## License
Free software, Hell yeah
[MIT](License.md)
