# Sunny App

A MERN stack weather app allow you to search for weather forecast of a city. Logged in user can save city to an watchlist to see all cities from a dashboard view. [Demo](http://sunny-weather-app.herokuapp.com/) at heroku.

![App Screenshot](https://github.com/hgkhanh/sunny-app/blob/main/ss.png)


# Usage
- User can search for city weather by typing and submit a city name
- User can login to Google. When logged in, user can follow cities to save them in their Dashboard.

# Technology, libraries
- TypeScripts
- Redux, Thunk
- PassportJS
- Mongoose
- Styled-system
- Jest

# Installation
Clone the repository
```
git clone https://github.com/hgkhanh/sunny-app
```
Install dependencies
```
cd sunny-app
npm install
npm install --prefix client
```

Run Express server
```
npm run start
```

Run React client
```
cd client
npm run start
```

# Test
Unit and Integration test using Jest and [suppertest](https://github.com/visionmedia/supertest)
- Run the test for server
```
cd sunny-app
jest
```
- Run the test for client
```
cd client
jest
```
