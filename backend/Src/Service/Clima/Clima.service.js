import axios from "axios";

export const getToday = async (lat, lon) => {
  try {
    return await axios.get("https://api.openweathermap.org/data/3.0/onecall", {
      params: {
        lat: lat,
        lon: lon,
        appid: process.env.OPEN_WEATHER_API_KEY,
        lang: "es",
        units: "metric",
        exclude: "minutely",
      },
    });
  } catch (error) {
    console.log("No se pudo traer el pronostico de 1 dia", error);
    throw error;
  }
};
