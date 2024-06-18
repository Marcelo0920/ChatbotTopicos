import mongoose from "mongoose";

const unidadMedidaSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  abreviatura: {
    type: String,
  },
  description: {
    type: String,
  },
});

const UnidadMedida = mongoose.model("UnidadMedida", unidadMedidaSchema);

export default UnidadMedida;
