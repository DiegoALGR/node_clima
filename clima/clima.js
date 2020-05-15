const axios = require("axios");

const getClima = async (lat, lng) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e9dd60c46f3aeacc305494a9c8f6cc76&units=metric`
  );

  var currentWeather = {
    temp: response.data.main.temp,
    weather: response.data.weather[0],
  };

  return currentWeather;
};

module.exports = {
  getClima,
};
