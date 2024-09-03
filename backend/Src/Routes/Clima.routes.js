import axios from "axios";
import { Router } from "express";

const router = Router();

router.get("/today", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const climaData = await axios.get(
      "https://api.openweathermap.org/data/3.0/onecall",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: process.env.OPEN_WEATHER_API_KEY,
          lang: "es",
          units: "metric",
          exclude: "minutely,alerts,daily",
        },
      }
    );

    res.json({ ok: true, response: climaData.data });
  } catch (error) {
    res
      .status(400)
      .json({ ok: false, response: `no se pudo buscar el clima ${error}` });
  }
});

router.get("/fivedays", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon)
    res.status(400).send({ ok: false, response: "Falta longitude o latitud" });

  try {
    const climaData = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: process.env.OPEN_WEATHER_API_KEY,
          lang: "es",
          units: "metric",
        },
      }
    );

    res.json({ ok: true, response: climaData.data });
  } catch (error) {
    res
      .status(400)
      .json({ ok: false, response: `no se pudo buscar el clima ${error}` });
  }
});

export default router;
