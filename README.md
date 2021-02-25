# YouSurf

[YouSurf](https://yousurf.herokuapp.com/) is a Youtube video data querying web application using NodeJS on the backend, React/Redux on the frontend, and MongoDB for the database.

YouSurf is a personal project by Anderson Kwon.

![home](https://media.giphy.com/media/cnlyjAMB1RzZAiNC8Y/giphy.gif)

## Features

- User account creation with secure authentication and password hashing using md5 library
- Username verification to prevent duplicates
- Update user profile
- Search and query Youtube videos using Google API
- Autonomous and continuous query fetching based on user scroll movement
- Random video search feature (I'm Feeling Lucky!) using random keyword generator
- Add/Remove youtube videos to favorites in database
- Quick access to users' favorites via Favorite menu

![features](https://media.giphy.com/media/bsoEoLiSTm5Ych8CSc/giphy.gif)

## Product Design

YouSurf was designed and built in three weeks.

- [Sample State](https://github.com/skjoon1804/yousurf/blob/main/src/server/defaultState.js)
- [Database Schema](https://github.com/skjoon1804/yousurf/blob/main/schema.md)

## Useful Links

- [Youtube API](https://developers.google.com/youtube/v3/getting-started)

## Technology

- Backend Technology

  - Node.js
    - md5 for password hashing
    - uuid
    - axios
  - Database
    - MongoDB

- Frontend Technology

  - React.js & Redux
    - To keep component renders organized and reusable - actions, reducers, store
    - axios: To make HTTP request to the server
  - Bootstrap & CSS
    - For styles
  - Others
    - ReactDOM, React Router, React History, Link, Babel, Webpack

- File Storage

  - Cloudinary

- Heroku for hosting
