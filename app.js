const lugar = require("./lugar/lugar.js");
const clima = require("./clima/clima.js");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Descripción de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugar(direccion);

    const details = await clima.getClima(
      coords.latiResponse,
      coords.lngRespone
    );

    response = ``;

    response += `=========== CLIMA ========== \n`;
    response += `temp: ${details.temp} \n`;
    response += `details: \n`;
    response += `-------> ${details.weather.main} \n`;
    response += `-------> ${details.weather.description} \n`;

    return response;
  } catch (e) {
    return `No se pudo determinar el clima para ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
