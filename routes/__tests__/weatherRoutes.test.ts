import express from 'express';
import request from 'supertest';
import weatherRoutes from '../weatherRoutes';

require('dotenv').config();

const app = express();
app.use('/', weatherRoutes);

describe('GET /api/weather - return city 5 days forecast', () => {
    it('Should return all temperature data', async () => {
        const res = await request(app).get("/api/weather?city=Helsinki");
        console.log(res.body);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('daily');
        expect(res.body.data.daily.length).toBeGreaterThan(0);
    });
});