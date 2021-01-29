import express from 'express';
import authRoute from './routes/authRoutes';
import Passport from './services/passport';
import Mongoose from './services/mongoose';

const app = express();
const port = 5000;

Mongoose.init();
Passport.init(app);

app.use('/', authRoute);

app.listen(port, () => console.log(`Running on port ${port}`));