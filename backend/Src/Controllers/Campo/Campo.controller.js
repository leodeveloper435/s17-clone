import CampoService from "../../Service/Campo/Campo.service.js";
import { validateCampo } from "../../Validation/Campo/Campo.validator.js";

export const getCampos = async (req, res) => {
  try {
    const campos = await CampoService.getAllCampos();
    res.json(campos);
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const getCampoById = async (req, res) => {
  try {
    const { campoId } = req.params;
    const campo = await CampoService.getCampoById(campoId);
    if (!campo) {
      res.status(404).json({ error: "Campo no encontrado." });
    } else {
      res.json({ campo });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCamposByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const campos = await CampoService.getAllCamposByUserId(userId);
    if (!campos) {
      res.status(404).json({ error: "Campos no encontrados." });
    } else {
      res.json({ campos });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCampo = async (req, res) => {
  const { errorMessages, hasError, userData } = validateCampo(req.body);
  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }
  try {
    const newCampo = await CampoService.createCampo(userData);
    res.status(201).json(newCampo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCampo = async (req, res) => {
  const { errorMessages, hasError, userData } = validateCampo(req.body);
  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }
  try {
    const { id } = req.params;
    const updatedCampo = await CampoService.updateCampo(id, userData);
    if (!updatedCampo) {
      res.status(404).json({ error: "Campo no encontrado." });
    } else {
      res.json(updatedCampo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCampo = async (req, res) => {
  try {
    const { campoId } = req.params;
    const deletedCampo = await CampoService.deleteCampo(campoId);
    if (!deletedCampo) {
      res.status(404).json({ error: "Campo no encontrado." });
    } else {
      res.json(deletedCampo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAllCampos = async (req, res) => {
  try {
    const deletedCampos = await CampoService.deleteAllCampos();
    if (!deletedCampos) {
      res.status(404).json({ error: "Campos no encontrados." });
    } else {
      res.json(deletedCampos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
