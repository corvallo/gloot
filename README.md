# G:LOOT front-end assignment

## Project structure

Project is composed of two folder.

- Server folder contains the server provided by Gloot
- Frontend folder contains the code developed to fit the assignment requirements

## How to start the project

### Frontend

1.  Open a terminal and navigate to the frontend folder e.g. `cd frontend`
2.  Install dependencies `npm i ` or `yarn ` (I used yarn)
3.  Start dev frontend server `npm run dev` or `yarn dev`
4.  Dev server will start on a available port e.g. ` http://127.0.0.1:5173/`

### Server

1. Open a terminal and navigate to the server folder e.g. `cd server`
2. Instructions provided in the assignment README related to the server are still valid.

### Technical choices

Since is a small project, I decided to not use complex tool or libraries.

Project was initialized using Vite [https://vitejs.dev/guide/], and it is made with React.

I used Zustand to manage the state, which is a small library compared to redux for example ( [https://bundlephobia.com/package/zustand@4.1.1]). Infos about the library can be found here [https://docs.pmnd.rs/zustand/getting-started/introduction].

To increase the efficency of the list list of the players,  I introduced another small library (react-window [https://github.com/bvaughn/react-window]). The assumption I made is that the list can increase its size drastically, so to avoid performance issues I used this library.

For the sake of the semplicity I didn't used any UI component libraries or css libraries, I preferred to create my own css.

On server side I just added a rule to the cors middleware, because delete method was causing CORS problems

## Assignment details

### Instructions

Build a front-end application that communicates with the server provided in this repository. You may use any library/framework/technique/boilerplate that you like and deem suitable for this assignment.

The application you will build is a very simple player management tool. The user should be presented with a list of players received from the server, and have the option to add new players and update/delete existing ones.

### How to run the server

The server is a minimal HTTP-server exposing a REST-type API written using nodeJS and Express. You may alter the server code in any way you wish.

1. Clone this repository.

2. Open a terminal and run `npm i && npm run start` from the project root.

3. The server is now running on `localhost:3000`. You can test the server by going to `http://localhost:3000/players` in your browser.

The API is described in `index.js` within the project root.

### Evaluation

These are some of the things we appreciate:

- Easy, clean, well-indented and readable code, no unnecessary complexity.

- Usage of a component-based library/framework (react, angular, vue or similar).

- Testable code (separation of concern, referential transparency).

- Handling of asynchronous fetching of data from an API.

- Do not reinvent the wheel.

- Display some CSS/styling skills.

### Submission notes:

- If you are using a boilerplate, please submit the boilerplate code and your own code in different git commits, so that we may differentiate the two.

- Uploading the assignment to github and sending us the link is our preferred method of submission. However you may send the project as a zip file instead if github is not an option for you.# G:LOOT front-end assignment

### Instructions

Build a front-end application that communicates with the server provided in this repository. You may use any library/framework/technique/boilerplate that you like and deem suitable for this assignment.

The application you will build is a very simple player management tool. The user should be presented with a list of players received from the server, and have the option to add new players and update/delete existing ones.

### How to run the server

The server is a minimal HTTP-server exposing a REST-type API written using nodeJS and Express. You may alter the server code in any way you wish.

1. Clone this repository.

2. Open a terminal and run `npm i && npm run start` from the project root.

3. The server is now running on `localhost:3000`. You can test the server by going to `http://localhost:3000/players` in your browser.

The API is described in `index.js` within the project root.

### Evaluation

These are some of the things we appreciate:

- Easy, clean, well-indented and readable code, no unnecessary complexity.

- Usage of a component-based library/framework (react, angular, vue or similar).

- Testable code (separation of concern, referential transparency).

- Handling of asynchronous fetching of data from an API.

- Do not reinvent the wheel.

- Display some CSS/styling skills.

### Submission notes:

- If you are using a boilerplate, please submit the boilerplate code and your own code in different git commits, so that we may differentiate the two.

- Uploading the assignment to github and sending us the link is our preferred method of submission. However you may send the project as a zip file instead if github is not an option for you.
