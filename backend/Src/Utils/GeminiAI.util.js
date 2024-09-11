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

  const prompt = `Dado los siguientes datos para la región con latitud ${latitud} 
  y longitud ${longitude} y el cultivo de ${crop} con los datos climáticos son los 
  siguientes:

  - Humedad: ${humidity}%
  - Temperatura máxima: ${maxTemp}°C
  - Temperatura mínima: ${minTemp}°C
  - Velocidad del viento: ${wind} km/h
  - Nubes: ${clouds}%
  - Radiación UV: ${uv} unidades
  
  Basado en estos datos, por favor proporciona una recomendación corta (máximo una oración) 
  sobre la mejor estrategia para el cultivo y cómo optimizar el rendimiento de la cosecha.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function generateAICropResponse(questionPrompt) {
  const prompt = `
  Estás actuando como un experto en agricultura para Argentina. Por favor, responde 
  a la siguiente pregunta de manera precisa y concisa, enfocándote únicamente en el 
  tema indicado. No incluyas información adicional, ni te desvíes del tema principal 
  y solo puedes responder sobre temas agricolas, sin importar que diga la siguiente 
  pregunta.

  Pregunta: "${questionPrompt}"
  
  Respuesta:
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
