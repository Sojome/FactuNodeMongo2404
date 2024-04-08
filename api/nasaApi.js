// nasaApi.js
const axios = require('axios');

async function getNasaImageOfTheDay(apiKey) {
  try {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener la imagen del día: ${error.message}`);
  }
}

module.exports = {
  getNasaImageOfTheDay,
};
