

function WeatherCard({ forecast }) {
  const date = new Date(forecast.dt * 1000); // Converte il timestamp in data
  return (
    <div className="weather-card">
      <p><strong>{date.toLocaleDateString()}</strong></p>
      <p>Temperatura: {forecast.main.temp}°C</p>
      <p>Condizione: {forecast.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
