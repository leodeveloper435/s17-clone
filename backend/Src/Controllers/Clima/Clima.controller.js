import { getToday } from "../../Service/Clima/Clima.service.js";
import { formatearClima } from "../../Utils/FormatWeatherData.js";

export const weatherForecast = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon)
    res.status(404).json({ error: "Falta longitude o latitud" });

  try {
    const forecast = formatearClima((await getToday(lat, lon)).data);
    res.json(forecast);
  } catch (error) {
    res.status(404).json({ error: `no se pudo buscar el clima ${error}` });
  }
};
