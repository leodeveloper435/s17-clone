import Campo from "../../Models/Campos/Campo.model.js";

class CampoManager {
  async findAll() {
    try {
      return await Campo.findAll();
    } catch (error) {
      console.error("Error al obtener todos los campos:", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await Campo.findByPk(id);
    } catch (error) {
      console.error(`Error al obtener el campo con ID ${id}:`, error);
      throw error;
    }
  }

  async findAllByUserId(userId) {
    try {
      return await Campo.findAll({
        where: {
          userId,
        },
      });
    } catch (error) {
      console.error(
        `Error al obtener los campos con el usuario ID ${userId}:`,
        error
      );
      throw error;
    }
  }

  async createOne(campoData) {
    try {
      return await Campo.create(campoData);
    } catch (error) {
      console.error("Error al crear el campo:", error);
      throw error;
    }
  }

  async updateOne(id, updateData) {
    try {
      const campo = await this.findById(id);
      if (!campo) {
        throw new Error(`Campo con ID ${id} no encontrado`);
      }
      return await campo.update(updateData);
    } catch (error) {
      console.error(`Error al actualizar el campo con ID ${id}:`, error);
      throw error;
    }
  }

  async updateMany(condition, updateData) {
    try {
      return await Campo.update(updateData, {
        where: condition,
      });
    } catch (error) {
      console.error("Error al actualizar múltiples campos:", error);
      throw error;
    }
  }

  async deleteOne(id) {
    try {
      const campo = await this.findById(id);
      if (!campo) {
        throw new Error(`Campo con ID ${id} no encontrado`);
      }
      await campo.destroy();
      return { message: `Campo con ID ${id} eliminado` };
    } catch (error) {
      console.error(`Error al eliminar el campo con ID ${id}:`, error);
      throw error;
    }
  }

  async deleteAll() {
    try {
      await Campo.destroy({
        where: {},
        truncate: true,
      });
      return { message: "Todos los campos han sido eliminados" };
    } catch (error) {
      console.error("Error al eliminar todos los campos:", error);
      throw error;
    }
  }
}

export default new CampoManager();
