import { useState } from 'react';
import axios from 'axios';

const BASE_URL =
    'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b4055565022293227b66baae6524a291';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
    console.log('Greetings, i am a hook.'); //Hook check.
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const locationId = async location => {
        console.log({ location });

        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        console.log({ data });

        if (!data || data.length === 0) {
            setError('No such location');
            return;
        }

        return data;
    };

    const getForecastData = async locationId => {
        const { data } = await axios(`${REQUEST_URL}/${locationId}`);
        if (!data || data.length === 0) {
            setError('Something went wrong.');
            return;
        }
        return data;
    };

    const submitRequest = async location => {
        const response = await locationId(location);

        const data = await getForecastData(response[0].locationId); //VIDEO MINUTO 30

        console.log({ response });
    };

    return {
        isError,
        isLoading,
        forecast,
    };
};

export default useForecast;
