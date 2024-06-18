import mongoose from "mongoose";

const juegoProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  description: {
    type: String,
  },
  precioJuego: {
    type: Number,
  },
  idProductos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
      required: true,
    },
  ],
});

const JuegoProducto = mongoose.model("JuegoProducto", juegoProductoSchema);

export default JuegoProducto;
