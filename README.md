# PerlegoReader
<br />
<p align="left">
  <a href="https://github.com/davidarebuwa/PerlegoReader">
    <img src="https://pbs.twimg.com/profile_images/1306155249640636417/uxhtOhww_400x400.jpg" alt="Logo" width="100" height="100">
  </a>

  <p align="left">
  <strong>This is a sample React Native App with Jest and React Testing Library"</strong>
    <br />
    <br />
  </p>
</p>

### Screenshot

    <img src="https://i.imgur.com/wTqzojq.mp4" alt="Logo" width="100" height="100">


### Architecture Overview

Upon opening the app, the user is presented with a home screen. The list of planets and their associated Wikipedia articles are loaded from a JSON file, simulating an API call. This allows for flexibility in the future as the data can be retrieved from any external source. The contents of the file are stored in the app's state using a reducer. Once the user taps on the start button, they are taken to the menu list where they can start exploring the different planets.

The menu list shows a list of planets for the user to choose from. Once the user selects a planet, the app will remember which one was chosen. The user will be taken to the page where they can read about the planet by clicking on the selected one.

On the article screen, the Wikipedia article about the selected planet is displayed in a webview. The next and previous buttons, which are built using React Native, allow the user to navigate through the different headings on the page. When these buttons are pressed, a message is sent to the webview, which then uses javascript to scroll to the next or previous heading.


### Prerequisites

- Node.js
- npm or yarn
- Expo CLI


## Installing

Clone the repository:

https://github.com/davidarebuwa/PerlegoReader.git

Install depencies by running:

### `npm install`

In the project directory, you can then run:

### `npm run start`

Runs the app in the development mode.\

To run unit tests:

### `npm test`

This will start Jest and run all the tests in the project.


## Built With

- [React Native](https://reactnative.dev/) - A framework for building mobile apps using React
- [Expo](https://expo.io/) - A toolchain for building React Native apps
- [Jest](https://jestjs.io/) - A JavaScript testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/)
