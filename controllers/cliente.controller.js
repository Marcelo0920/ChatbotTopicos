import Cliente from "../models/Cliente.model.js";
import { createChat } from "./chat.controller.js";

//crear cliente
export const createCliente = async (profileName, whatsappNumber) => {
  try {
    const client = await verifyIfClientExists(whatsappNumber);

    if (!client) {
      const nuevoCliente = new Cliente({
        profileName: profileName,
        whatsappNumber: whatsappNumber,
      });

      await nuevoCliente.save();

      await createChat(nuevoCliente._id);

      return nuevoCliente._id;
    } else {
      return client._id;
    }
  } catch (error) {
    console.log(error);
  }
};

//verificar si el cliente existe
export const verifyIfClientExists = async (whatsappNumber) => {
  try {
    const client = await Cliente.findOne({ whatsappNumber: whatsappNumber });

    return client;
  } catch (error) {
    console.log(error);
  }
};
