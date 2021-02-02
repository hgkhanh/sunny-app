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

Create .env file with this format. Weather API key can be obtained at [openweathermap.org](https://openweathermap.org/). Location API key can be obtained at [locationiq.com](https://locationiq.com/)
```
GOOGLE_CLIENT_ID=<your_id>
GOOGLE_CLIENT_SECRET=<your_secret>
MONGO_URI=mongodb+srv://<your_username>:<your_password>@<your_cluster_url>/main?retryWrites=true&w=majority
COOKIE_KEY=<a_random_string>
WEATHER_API_URL=https://api.openweathermap.org/data/2.5/onecall
WEATHER_API_KEY=<your_api_key>
LOCATION_IQ_URL=https://eu1.locationiq.com/v1/search.php
LOCATION_IQ_KEY=<your_api_key>
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
