use("chatbot");

// Insert a few documents into the sales collection.
const unidadesMedida = [
  {
    nombre: "Litros",
    abreviatura: "lt",
    description:
      "Unidad de medida para volumen, comúnmente usada para líquidos.",
  },
  {
    nombre: "Mililitros",
    abreviatura: "ml",
    description:
      "Unidad de medida para volumen, comúnmente usada para pequeñas cantidades de líquidos.",
  },
  {
    nombre: "Kilogramos",
    abreviatura: "kg",
    description:
      "Unidad de medida para masa, comúnmente usada para alimentos y otros productos.",
  },
  {
    nombre: "Onza",
    abreviatura: "oz",
    description:
      "Unidad de medida para masa y volumen, usada principalmente en países anglosajones.",
  },
  {
    nombre: "Gramos",
    abreviatura: "gr",
    description:
      "Unidad de medida para masa, comúnmente usada para pequeñas cantidades de alimentos y otros productos.",
  },
];

// Insertar las unidades de medida en la colección
db.UnidadMedida.insertMany(unidadesMedida);
