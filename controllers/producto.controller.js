import Producto from "../models/Producto.model.js";

export const obtenerTodosLosProductos = async (req, res) => {
  try {
    const productos = await Producto.find()
      .populate("unidadDeMedida")
      .populate("categorias");
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
