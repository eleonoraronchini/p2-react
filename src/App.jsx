import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import DetailsPage from './components/DetailsPage';
import MyNavbar from "./components/MyNavbar";
import './App.css';

function App() {
  const [city, setCity] = useState('');

  return (
    <Router>
      <MyNavbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage setCity={setCity} />} />
          <Route path="/details" element={<DetailsPage city={city} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
