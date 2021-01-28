import express from 'express';
import authRoute from './routes/authRoutes';

const app = express();
const port = 5000;

app.use('/auth', authRoute);

app.listen(port, () => console.log(`Running on port ${port}`));