declare module 'weather-styled-icon' {
    import * as React from 'react';

    class Sunny extends React.Component<SunnyProps, any> { }
    class Rain extends React.Component<RainProps, any> { }
    class Snow extends React.Component<SnowProps, any> { }
    class Cloudy extends React.Component<CloudyProps, any> { }

    class WeatherThemeProvider extends React.Component<WeatherThemeProviderProps, any> { }

    export interface SunnyProps {
        size?: number
    }

    export interface RainProps {
        size?: number,
        lighting?: boolean,
        patchy?: boolean
    }

    export interface SnowProps {
        size?: number,
        patchy?: boolean
    }

    export interface CloudyProps {
        size?: number,
        patchy?: boolean
    }

    export interface WeatherThemeProviderProps {
        theme?: ThemeObject
    }

    interface ThemeObject {
        sunColor?: string,
        raysColor?: string,
        cloudsColor?: string,
        dropsColor?: string,
        snowColor?: string,
        boltColor?: string,
        backgroundColor?: string,
    }
}