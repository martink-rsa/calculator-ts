# Calculator Exercise

This is a basic calculator build using React, TDD, TypeScript, and styled-components.

# Notes regarding building out the calculator:

The calculator was part of a 1 hour and 30 minute exercise, where it wasn't expected for the entire calculator to be built out.

The calculator was built using TDD (Jest and react-testing-library). Unit and integration tests were created, which results in not only the calculator functionality being tested but also what is being displayed on the calculator. react-testing-library issues the calculator commands like a user would, resulting in very robust tests.

There are steps taken to prevent errors, such as repeated operator and equal sign presses, due to this functionality not being added. The codebase allows for this extra functionality to be included in the future.

The calculator uses recursion to work through the equation, allowing it to follow the BODMAS / PEMDAS convention i.e. 10 - 1 \* 5 = 5.

There is some functionality missing due to the project being a timed challenge, such as the square root and percentage-of buttons. These can be added at a later stage, however I might rebuild the calculator from scratch and use a state library if there are going to be many more forms of operation.

# Installation:

Clone the repo to your computer.

In the root directory of the project, install the dependencies with `yarn` or `yarn install`.

# Available scripts:

You can run the following scripts from the root directory of the project

## `yarn start`

This will start the development mode of the app and is the easiest way to preview the app.

## `yarn build`

Builds the production in the `build` folder.

### Note regarding serving the app locally:

You can serve this locally by using the `serve` package, however, it will need to be installed first:

`npm install -g serve`

`serve -s build`

You can now open the page at the address given to you, typically http://localhost:5000

## `yarn test`

Runs the Jest test units.
