import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Weather = ({country}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (country) {
            const params = {
                access_key: process.env.REACT_APP_API_KEY,
                query: country
            }
            Axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                setWeather(response.data)
                console.log(response.data.current)
            }).catch(error => {
                console.error("Error fetching data", error)
            })
        }
    }, [country]);

    if (weather != null) {
        return (
            <>
                <h2>Weather in {country}</h2>
                <p><b>Temperature: </b>{weather.current.temperature} degrees celcius</p>
                <img src={weather.current.weather_icons[0]} alt="Weather"/>
                <p><b>Wind: </b>{weather.current.wind_speed} mph {weather.current.wind_dir}</p>
            </>
        )
    } else {
        return <p>Loading weather....</p>
    }
}

export default Weather