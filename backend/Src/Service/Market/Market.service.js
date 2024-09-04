import axios from "axios";

class MarketService {
  async getGrainPrices() {
    try {
      const response = await axios.get(
        "https://www.grassisa.com.ar/get_pizarra/"
      );
      return response.data.pizarra[0];
    } catch (error) {
      console.error("Error al buscar todos los precios", error);
      throw error;
    }
  }

  getFilteredGrainPrices(dataPrices) {
    const crops = ["trigo", "maiz", "girasol", "sorgo", "soja"];
    const filteredPrices = {};

    for (const grain of crops) {
      if (dataPrices[grain]) {
        let price = dataPrices[grain].estimativo;

        if (price === "0.00") {
          price = dataPrices[grain].rosario;
        }

        filteredPrices[grain] = price === "0.00" ? "S/C" : price;
      }
    }
    return JSON.stringify(filteredPrices);
  }
}

export default new MarketService();
