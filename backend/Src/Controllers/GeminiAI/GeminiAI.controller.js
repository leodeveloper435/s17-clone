import GeminiAIService from "../../Service/GeminiAI/GeminiAI.service.js";

export const getAICropRecomendation = async (req, res) => {
  try {
    const recomendation = await GeminiAIService.getAICropRecomendation(req.body);
    const cleanedRecommendation = recomendation.replace(/\n/g, ' ').trim();
    res.status(200).json({ recomendation: cleanedRecommendation });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};
