import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage({ setCity }) {
  const [inputCity, setInputCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
    navigate('/details');
  };

  return (
    <div className="homepage">
      <h1>Controlla il Meteo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci una città"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>
    </div>
  );
}

export default Homepage;