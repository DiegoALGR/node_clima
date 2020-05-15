const axios = require("axios");

const getLugar = async (direccion) => {
  const encodedUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "X-RapidAPI-Key": "ec9a3ae6e9mshd6307d65dd149a7p1595bajsn1430fa6995f0",
    },
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];

  const dirResponse = data.name;
  const latiResponse = data.lat;
  const lngRespone = data.lon;

  return { dirResponse, latiResponse, lngRespone };
};

module.exports = {
  getLugar,
};
