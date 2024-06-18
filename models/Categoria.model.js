import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;
