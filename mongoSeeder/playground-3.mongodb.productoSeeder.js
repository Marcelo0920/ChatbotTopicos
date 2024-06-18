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
use('chatbot');

// Insert a few documents into the sales collection.
const productos = [
    {
      nombre: "Agua Mineral con Gas",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f2"), // Litros
      categorias: [ObjectId("666a7589938ed9daf00d454c")], // Bebida
      imagenes: ["https://example.com/agua_mineral_gas.jpg"],
      description: "Agua mineral natural con gas.",
      caracteristicas: [{ caracteristica: "Gasificada" }, { caracteristica: "Botella de vidrio" }],
      precioProducto: 1.5,
      precioServicio: 0,
      stock: 100,
      tiempoServicioHoras: 0,
      productoEnVenta: true,
    },
    {
      nombre: "Coca-Cola Zero",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f3"), // Mililitros
      categorias: [ObjectId("666a7589938ed9daf00d454c")], // Bebida
      imagenes: ["https://example.com/coca_cola_zero.jpg"],
      description: "Refresco Coca-Cola sin azúcar.",
      caracteristicas: [{ caracteristica: "Sin azúcar" }, { caracteristica: "Lata de 350 ml" }],
      precioProducto: 1,
      precioServicio: 0,
      stock: 200,
      tiempoServicioHoras: 0,
      productoEnVenta: true,
    },
    {
      nombre: "Hamburguesa de Pollo",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f4"), // Kilogramos
      categorias: [ObjectId("666a7589938ed9daf00d454b")], // Comida
      imagenes: ["https://example.com/hamburguesa_pollo.jpg"],
      description: "Hamburguesa con carne de pollo, lechuga y tomate.",
      caracteristicas: [{ caracteristica: "Pan integral" }, { caracteristica: "Con aderezo de mostaza" }],
      precioProducto: 5,
      precioServicio: 0,
      stock: 50,
      tiempoServicioHoras: 0,
      productoEnVenta: true,
    },
    {
      nombre: "Cámara DSLR Canon EOS 90D",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f5"), // Onza
      categorias: [ObjectId("666a7589938ed9daf00d454e")], // Fotografía
      imagenes: ["https://example.com/camara_canon_eos_90d.jpg"],
      description: "Cámara DSLR Canon EOS 90D con lente 18-135mm.",
      caracteristicas: [{ caracteristica: "32.5 MP" }, { caracteristica: "Video 4K" }],
      precioProducto: 1500,
      precioServicio: 0,
      stock: 10,
      tiempoServicioHoras: 0,
      productoEnVenta: true,
    },
    {
      nombre: "Lámpara de Escritorio LED Regulable",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f6"), // Gramos
      categorias: [ObjectId("666a7589938ed9daf00d454f")], // Decoración
      imagenes: ["https://example.com/lampara_led.jpg"],
      description: "Lámpara de escritorio LED con brillo regulable.",
      caracteristicas: [{ caracteristica: "Brillo ajustable" }, { caracteristica: "Diseño moderno" }],
      precioProducto: 25,
      precioServicio: 0,
      stock: 30,
      tiempoServicioHoras: 0,
      productoEnVenta: true,
    },
    {
      nombre: "Servicio de Transporte Ejecutivo",
      unidadDeMedida: ObjectId("666a75ab5036f0ab6fcad1f4"), // Kilogramos (puede no ser relevante para servicios)
      categorias: [ObjectId("666a7589938ed9daf00d454d")], // Transporte
      imagenes: ["https://example.com/transporte_ejecutivo.jpg"],
      description: "Servicio de transporte ejecutivo con conductor.",
      caracteristicas: [{ caracteristica: "Vehículo de lujo" }, { caracteristica: "WiFi disponible" }],
      precioProducto: 0,
      precioServicio: 200,
      stock: 0,
      tiempoServicioHoras: 4,
      productoEnVenta: false,
    },