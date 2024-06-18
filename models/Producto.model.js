import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  unidadDeMedida: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UnidadMedida",
    required: true,
  },
  categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categoria",
      required: true,
    },
  ],
  imagenes: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  catacteristicas: {
    type: [String],
  },
  precioProducto: {
    type: Number,
  },
  precioServicio: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  tiempoServicioHoras: {
    type: Number,
  },
  productoEnVenta: {
    type: Boolean,
  },

  embedding_nombre: {
    type: [Number],
    default: [],
  },
  embedding_descripcion: {
    type: [Number],
    default: [],
  },
  embedding_caracteristicas: {
    type: [Number],
    default: [],
  },
  embedding_categoria: {
    type: [Number],
    default: [],
  },
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
