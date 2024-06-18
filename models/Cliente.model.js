import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    required: true,
  },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;
