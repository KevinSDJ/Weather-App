import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route, Switch } from 'react-router-dom';
import CiudadDetail from '../components/Ciudad.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import LocationWeather from './Location';
import dotenv from 'dotenv';
dotenv.config()

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso)
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            feels_like: recurso.main.feels_like,
            humidity: recurso.main.humidity,
            pressure: recurso.main.pressure,
            country: recurso.sys.country,
            description: recurso.weather[0].description
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App" >
      <Nav onSearch={onSearch} />
      <Switch>
        <Route path="/" exact >
          <LocationWeather />
          <div>
            <Cards cities={cities} onClose={onClose} />
          </div>
        </Route>
        <Route path="/About" exact >
          <About />
        </Route>
        <Route exact path="/ciudad/:item" render={({ match }) => <CiudadDetail city={onFilter(match.params.item)} />} />
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
