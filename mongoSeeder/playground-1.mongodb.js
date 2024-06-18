/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("chatbot");

// Crear los registros de categorías
const categorias = [
  {
    nombre: "Comida",
    description: "Categoría para todo tipo de alimentos y comidas.",
  },
  {
    nombre: "Bebida",
    description: "Categoría para todo tipo de bebidas y refrescos.",
  },
  {
    nombre: "Transporte",
    description: "Categoría para medios de transporte y vehículos.",
  },
  {
    nombre: "Fotografía",
    description: "Categoría para servicios y equipos de fotografía.",
  },
  {
    nombre: "Decoración",
    description: "Categoría para artículos y servicios de decoración.",
  },
];

// Insertar las categorías en la colección
db.Categorias.insertMany(categorias);
