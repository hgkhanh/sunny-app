import express from 'express';
import authRoute from './routes/authRoutes';
import Passport from './services/passport';
import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const port = 5000;

Passport.init(app);

app.use('/', authRoute);

app.listen(port, () => console.log(`Running on port ${port}`));