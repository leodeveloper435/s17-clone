import CampoManager from "../../DTO/Manager/Campos/Campo.manager.js";

class CampoService {
  async getAllCampos() {
    try {
      return await CampoManager.findAll();
    } catch (error) {
      console.error("Error al obtener todos los campos:", error);
      throw error;
    }
  }

  async getCampoById(campoId) {
    try {
      return await CampoManager.findById(campoId);
    } catch (error) {
      console.error(`Error al obtener el campo con ID ${campoId}:`, error);
      throw error;
    }
  }

  async getAllCamposByUserId(userId) {
    try {
      return await CampoManager.findAllByUserId(userId);
    } catch (error) {
      console.error(
        `Error al obtener los campos con el usuario ID ${userId}:`,
        error
      );
      throw error;
    }
  }

  async createCampo(campoData) {
    try {
      return await CampoManager.createOne(campoData);
    } catch (error) {
      console.error("Error al crear el campo:", error);
      throw error;
    }
  }

  async updateCampo(campoId, campoData) {
    try {
      return await CampoManager.updateOne(campoId, campoData);
    } catch (error) {
      console.error(`Error al actualizar el campo con ID ${campoId}:`, error);
      throw error;
    }
  }

  async updateManyCampos(condition, updateData) {
    try {
      return await CampoManager.updateMany(campoId, campoData);
    } catch (error) {
      console.error("Error al actualizar múltiples campos:", error);
      throw error;
    }
  }

  async deleteCampo(campoId) {
    try {
      return await CampoManager.deleteOne(campoId);
    } catch (error) {
      console.error(`Error al eliminar el campo con ID ${campoId}:`, error);
      throw error;
    }
  }

  async deleteAllCampos() {
    try {
      return await CampoManager.deleteAll();
    } catch (error) {
      console.error("Error al eliminar todos los campos:", error);
      throw error;
    }
  }
}

export default new CampoService();