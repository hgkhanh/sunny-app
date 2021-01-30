import express from 'express';
import authRoutes from './routes/authRoutes';
import weatherRoutes from './routes/weatherRoutes';
import Passport from './services/passport';
import Mongoose from './services/mongoose';

if (process.env.NODE_ENV) {
    require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
} else {
    require('dotenv').config();
}

const app = express();
const port = 5000;

Mongoose.init();
Passport.init(app);

app.use('/', authRoutes);
app.use('/', weatherRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));