import React from 'react';
import { render, screen } from '@testing-library/react';
import DayWeather from '../DayWeather';
import '@testing-library/jest-dom';

describe('<DayWeather />', () => {
    test('should display an weather box', async () => {
        const weatherData = {
            date: '2021-02-02T08:00:00.000Z',
            description: "snow",
            humidity: 98,
            temp: -2.99,
            weather: "Snow",
            wind: 1.29,
        }
        render(DayWeather(weatherData, 'Helsinki'));

        const dateEl = screen.getByText(/Tuesday/i);
        const weatherEl = screen.getByText(/snow/i);
        expect(dateEl).toBeInTheDocument();
        expect(weatherEl).toBeInTheDocument();
    });
});