import express from 'express';
import authRoutes from './routes/authRoutes';
import weatherRoutes from './routes/weatherRoutes';
import followRoutes from './routes/followRoutes';
import Passport from './services/passport';
import Mongoose from './services/mongoose';
import { preProcessFile } from 'typescript';

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const app = express();

let port = process.env.PORT || 5000;

Mongoose.init();
Passport.init(app);

app.use('/', authRoutes);
app.use('/', weatherRoutes);
app.use('/', followRoutes);

if (process.env.NODE_ENV === 'production') {
    // Express will serve production assets
    app.use(express.static('client/build'))
    // Express will serve index.html if route not recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Running on port ${port}`));