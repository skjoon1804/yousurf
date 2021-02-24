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

## Product Design

- YouSurf was designed and built in three weeks.

## Technology
- Backend
```javascript
    users: [{
        id: "U1",
        username: "admin",
        passwordHash: md5("123"),
        name: "admin",
        email: "admin@admin.com",
        dob: "01/01/1900",
        favorite: [{
            videoID: "9bZkp7q19f0",
            title: "",
            description: ""
        }]
    }]
```

- Frontend
  - React.js & Redux
  - Bootstrap
  - CSS
