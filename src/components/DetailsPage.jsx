import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

function DetailsPage({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (city) {
      const apiKey = '04d4923dab80ea31237913e22903e9f2';
      
      // 1. Ottenere i dati meteo della città
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;

      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);

          // Salva latitudine e longitudine
          const { lat, lon } = data.coord;
          setCoordinates({ lat, lon });
        })
        .catch((error) => {
          console.error('Errore nel recupero dei dati meteo:', error);
        });
    }
  }, [city]); // Solo city come dipendenza

  useEffect(() => {
    if (coordinates) {
      const apiKey = 'c9b4b641feed60d2153037070fe1aa5a';
      // 2. Ottenere le previsioni meteo future
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric&lang=it`;

      fetch(forecastUrl)
        .then((response) => response.json())
        .then((data) => {
          // Filtriamo le previsioni per giorno
          const dailyForecasts = [];
          let currentDay = null;

          data.list.forEach((forecast) => {
            const forecastDate = new Date(forecast.dt * 1000);
            const day = forecastDate.getDate();
            const month = forecastDate.getMonth();
            const year = forecastDate.getFullYear();

            // Se la data è diversa dal giorno precedente, la aggiungiamo
            if (
              !currentDay ||
              currentDay.day !== day ||
              currentDay.month !== month ||
              currentDay.year !== year
            ) {
              dailyForecasts.push(forecast);
              currentDay = { day, month, year };
            }
          });

          setForecastData(dailyForecasts);
        })
        .catch((error) => {
          console.error('Errore nel recupero delle previsioni:', error);
        });
    }
  }, [coordinates]); // Solo quando `coordinates` cambiano

  return (
    <div className="details-page">
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condizione: {weatherData.weather[0].description}</p>
          <p>Umidità: {weatherData.main.humidity}%</p>
          <p>Vento: {weatherData.wind.speed} km/h</p>
        </div>
      )}

      <h3>Previsioni per i prossimi 6 giorni:</h3>
      <div className="forecast">
        {forecastData &&
          forecastData.map((forecast) => (
            <WeatherCard key={forecast.dt} forecast={forecast} />
          ))}
      </div>
    </div>
  );
}

export default DetailsPage;
