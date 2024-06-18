import { GroqChatCompletion } from "../services/groq.services.js";
import { sendWhatsappMessage } from "../services/twilio.services.js";
import {
  addMessageToChat,
  getChatByClientId,
  verifyIfChatExists,
} from "./chat.controller.js";
import { createCliente } from "./cliente.controller.js";

export const newMessage = async (req, res) => {
  let {
    WaId: whatsappNumber,
    Body: message,
    ProfileName: profileName,
    MediaContentType0,
    MediaUrl0,
  } = req.body;

  //create client if exists
  const clientId = await createCliente(profileName, whatsappNumber);

  console.log(clientId);
  //verify if chatExists
  const chatId = await getChatByClientId(clientId._id);

  console.log(chatId);

  //prepare IA response
  const IAresponse = await GroqChatCompletion(profileName, message);

  const body = IAresponse.choices[0].message.content;

  //agregar el mensaje al chat
  await addMessageToChat(chatId._id, message);

  //send response to client
  sendWhatsappMessage(whatsappNumber, body);
};
