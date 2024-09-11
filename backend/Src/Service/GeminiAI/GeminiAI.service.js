import {
  generateAICropRecomendation,
  generateAICropResponse,
} from "../../Utils/GeminiAI.util.js";

class GeminiAIService {
  async getAICropRecomendation(recomendationData) {
    try {
      const recomendation = await generateAICropRecomendation(
        recomendationData
      );
      return recomendation;
    } catch (error) {
      console.error("Error al buscar una recomendación", error);
      throw error;
    }
  }

  async getAICropResponse(questionPrompt) {
    try {
      const response = await generateAICropResponse(questionPrompt);
      return response;
    } catch (error) {
      console.error("Error al buscar una respuesta", error);
      throw error;
    }
  }
}

export default new GeminiAIService();
