import Chat from "../models/Chat.model.js";

//crear chat
export const createChat = async (clientId) => {
  try {
    const newChat = new Chat({
      idCliente: clientId,
    });

    console.log("nuevo chat creado");
    await newChat.save();
  } catch (error) {
    console.log(error);
  }
};

//agregar mensaje a un chat
export const addMessageToChat = async (chatId, newMessage) => {
  try {
    const result = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: {
          message: {
            content: newMessage,
            createdAt: new Date(),
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (result) {
      console.log("Mensaje agregado correctamente:", result);
    } else {
      console.log("No se encontró ningún chat con ese ID.");
    }
  } catch (error) {
    console.error("Error al agregar el mensaje al chat:", error);
  }
};

//obtener chat por cliente id
export const getChatByClientId = async (clientId) => {
  try {
    const clientChat = await Chat.findOne({ idCliente: clientId });

    return clientChat;
  } catch (error) {
    console.log(error);
  }
};

export const verifyIfChatExists = async (clientId) => {
  try {
    const clientChat = await Chat.findOne({ idCliente: clientId });

    if (!clientChat) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
