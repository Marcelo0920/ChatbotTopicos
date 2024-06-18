import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config({
  path: "./data/config.env", // Asegúrate de especificar la ubicación correcta del archivo .env
});

const twilioClient = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendWhatsappMessage = async (destination, body) => {
  const data = {
    from: `${process.env.TWILIO_FROM_NUMBER}`,
    body,
    to: `whatsapp:+${destination}`,
  };

  twilioClient.messages
    .create(data)
    .then((message) => console.log("Mensaje Enviado. sid:" + message.sid));
};
