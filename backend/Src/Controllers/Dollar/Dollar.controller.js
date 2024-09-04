import DollarService from "../../Service/Dollar/Dollar.service.js";

export const getDollarQuotes = async (req, res) => {
    try {
      const dollarQuotes = await DollarService.getDollarQuotes();
      const filteredQuotes = DollarService.getFilteredDollarQuotes(dollarQuotes);
      res.json(JSON.parse(filteredQuotes));
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };