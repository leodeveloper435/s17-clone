import axios from "axios";

class DollarService {
  async getDollarQuotes() {
    try {
      const response = await axios.get("https://dolarapi.com/v1/dolares");
      return response.data;
    } catch (error) {
      console.error("Error al buscar todos las cotizaciones", error);
      throw error;
    }
  }

  getFilteredDollarQuotes(dataQuotes) {
    const quotes = [
      "Oficial",
      "Blue",
      "Bolsa",
      "Contado con liquidación",
      "Mayorista",
    ];

    const filteredPrices = dataQuotes
      .filter((quote) => quotes.includes(quote.nombre))
      .map((quote) => ({
        dollar: quote.nombre,
        buy: quote.compra,
        sell: quote.venta,
        updateDate: quote.fechaActualizacion,
      }));

    return JSON.stringify(filteredPrices);
  }
}

export default new DollarService();
