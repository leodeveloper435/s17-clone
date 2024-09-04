import MarketService from "../../Service/Market/Market.service.js";

export const getMarketGrainPrices = async (req, res) => {
    try {
      const prices = await MarketService.getGrainPrices();
      const filteredPrices = MarketService.getFilteredGrainPrices(prices);
      res.json(JSON.parse(filteredPrices));
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };