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

const productos = [
  {
    nombre: "Agua Mineral",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f2"), // Litros
    categorias: [ObjectId("666a7589938ed9daf00d454c")], // Bebida
    imagenes: ["https://example.com/agua_mineral.jpg"],
    description: "Agua mineral natural.",
    caracteristicas: ["Sin gas", "Natural"],
    precioProducto: 1.5,
    precioServicio: 0,
    stock: 100,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Coca-Cola",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f3"), // Mililitros
    categorias: [ObjectId("666a7589938ed9daf00d454c")], // Bebida
    imagenes: ["https://example.com/coca_cola.jpg"],
    description: "Refresco Coca-Cola.",
    caracteristicas: ["Con gas", "Azucarado", "soda"],
    precioProducto: 1,
    precioServicio: 0,
    stock: 200,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Hamburguesa",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f4"), // Kilogramos
    categorias: [ObjectId("666a7589938ed9daf00d454b")], // Comida
    imagenes: ["https://example.com/hamburguesa.jpg"],
    description: "Hamburguesa con carne de res.",
    caracteristicas: ["Con queso", "Grasoso", "Con lechuga"],
    precioProducto: 5,
    precioServicio: 0,
    stock: 50,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Cámara DSLR",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f5"), // Onza
    categorias: [ObjectId("666a7589938ed9daf00d454e")], // Fotografía
    imagenes: ["https://example.com/camara_dslr.jpg"],
    description: "Cámara DSLR profesional.",
    caracteristicas: ["Alta resolucion", "De color negro", "Nokia"],
    precioProducto: 500,
    precioServicio: 0,
    stock: 10,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Sillas",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f6"), // Gramos
    categorias: [ObjectId("666a7589938ed9daf00d454f")], // Decoración
    imagenes: ["https://example.com/lampara.jpg"],
    description: "Lámpara LED de escritorio.",
    caracteristicas: [
      "De plástico",
      "color blanco",
      "marca Rey",
      "Resistentes",
    ],
    precioProducto: 20,
    precioServicio: 0,
    stock: 30,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Servicio de Transporte",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f4"), // Kilogramos (puede no ser relevante para servicios)
    categorias: [ObjectId("666a7589938ed9daf00d454d")], // Transporte
    imagenes: ["https://example.com/transporte.jpg"],
    description: "Servicio de transporte para eventos.",
    caracteristicas: ["Mercedez", "Conductor incluido", "Limosina"],
    precioProducto: 0,
    precioServicio: 100,
    stock: 0,
    tiempoServicioHoras: 5,
    productoEnVenta: false,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Jugo de Naranja",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f2"), // Litros
    categorias: [ObjectId("666a7589938ed9daf00d454c")], // Bebida
    imagenes: ["https://example.com/jugo_naranja.jpg"],
    description: "Jugo de naranja natural.",
    caracteristicas: ["Sin azúcar añadida"],
    precioProducto: 2,
    precioServicio: 0,
    stock: 80,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Pizza",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f4"), // Kilogramos
    categorias: [ObjectId("666a7589938ed9daf00d454b")], // Comida
    imagenes: ["https://example.com/pizza.jpg"],
    description: "Pizza con queso y pepperoni.",
    caracteristicas: ["Tamaño familiar", "Con queso", "pepperoni"],
    precioProducto: 8,
    precioServicio: 0,
    stock: 40,
    tiempoServicioHoras: 0,
    productoEnVenta: true,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Fotografía de Eventos",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f6"), // Gramos (puede no ser relevante para servicios)
    categorias: [ObjectId("666a7589938ed9daf00d454e")], // Fotografía
    imagenes: ["https://example.com/fotografia_eventos.jpg"],
    description: "Servicio de fotografía para eventos.",
    caracteristicas: ["Fotografos profesionales", "cobertura total"],
    precioProducto: 0,
    precioServicio: 150,
    stock: 0,
    tiempoServicioHoras: 3,
    productoEnVenta: false,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
  {
    nombre: "Decoración Floral",
    unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f5"), // Onza
    categorias: [ObjectId("666a7589938ed9daf00d454f")], // Decoración
    imagenes: ["https://example.com/decoracion_floral.jpg"],
    description: "Servicio de decoración floral para eventos.",
    caracteristicas: ["Tulipanes", "Amarillas", "flores bonitas"],
    precioProducto: 0,
    precioServicio: 75,
    stock: 0,
    tiempoServicioHoras: 2,
    productoEnVenta: false,
    productoEnVenta: true,
    embedding_nombre: [],
    embedding_descripcion: [],
    embedding_caracteristicas: [],
    embedding_categoria: [],
  },
];

// Insertar los productos en la colección
db.productos.insertMany(productos);
