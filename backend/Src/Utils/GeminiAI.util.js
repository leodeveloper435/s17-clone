import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateAICropRecomendation(recomendationData) {
  const {
    latitud,
    longitude,
    crop,
    humidity,
    maxTemp,
    minTemp,
    wind,
    clouds,
    uv,
  } = recomendationData;
  
  const prompt = `Dado los siguientes datos para la región con latitud ${latitud} y longitud ${longitude} 
  y el cultivo de ${crop} con los datos climáticos son los siguientes:

  - Humedad: ${humidity}%
  - Temperatura máxima: ${maxTemp}°C
  - Temperatura mínima: ${minTemp}°C
  - Velocidad del viento: ${wind} km/h
  - Nubes: ${clouds}%
  - Radiación UV: ${uv} unidades
  
  Basado en estos datos, por favor proporciona una recomendación corta (máximo una oración) sobre la mejor 
  estrategia para el cultivo y cómo optimizar el rendimiento de la cosecha.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
