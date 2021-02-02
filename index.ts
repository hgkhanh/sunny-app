import express from 'express';
import authRoutes from './routes/authRoutes';
import weatherRoutes from './routes/weatherRoutes';
import followRoutes from './routes/followRoutes';
import Passport from './services/passport';
import Mongoose from './services/mongoose';

require('dotenv').config();

const app = express();
const port = 5000;

Mongoose.init();
Passport.init(app);

app.use('/', authRoutes);
app.use('/', weatherRoutes);
app.use('/', followRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));