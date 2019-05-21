import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import CardWeather from '../CardWeather/index';

import axios from 'axios';
import { error } from 'util';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e9e7e9;
`;

const Weather = () => {
  const initialState = {
    name: 'Санкт-Петербург',
    temp: 298
  };
  const [weather, setWeather] = useState(initialState);
  const [isDark, setDark] = useState(false);

  const cityID = '536203';
  const APIkey = 'edf2cb6284301cf124a65be72e97072a';

  // useEffect(() => {
  //   axios(
  //     `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${APIkey}`
  //   )
  //     .then(res => res.data)
  //     .then(data => {
  //       if (data) {
  //         setWeather(data);
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }, [weather]);

  const setTheme = () => {
    setDark(!isDark);
  };

  const getCelsius = kelvin => (kelvin - 273.15).toFixed(1);

  return (
    <CardWrapper>
      <CardWeather
        name={weather.name}
        deg={getCelsius(298)}
        isDark={isDark}
        onClick={setTheme}
      />
    </CardWrapper>
  );
};

export default Weather;
