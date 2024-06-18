import { PythonShell } from "python-shell";
import Producto from "../models/Producto.model.js";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateProductEmbedding = async (req, res) => {
  try {
    const productos = await Producto.find({});

    for (const producto of productos) {
      const texts = [producto.nombre, producto.description];

      try {
        const embeddings = await generateEmbeddings(texts);

        console.log(embeddings);

        producto.embedding_nombre = embeddings[0];
        producto.embedding_descripcion = embeddings[1];

        await producto.save();
        console.log(`Producto ${producto.nombre} actualizado con embeddings.`);
      } catch (error) {
        console.error(
          `Error procesando embeddings para producto ${producto.nombre}:`,
          error
        );
      }
    }

    // Finalmente, respondemos una vez que todos los productos hayan sido procesados correctamente
    res.json({ message: "Embeddings creados con éxito!!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Hubo un error :(" });
  }
};

const generateEmbeddings = async (texts) => {
  return new Promise((resolve, reject) => {
    const jsonText = JSON.stringify(texts);
    let jsonAddingDoubleQuotes = jsonText.replace(/"/g, '""');

    jsonAddingDoubleQuotes = `"${jsonAddingDoubleQuotes}"`;

    console.log(jsonAddingDoubleQuotes);

    const scriptPath = path.join(__dirname, "../python/generate_embeddings.py");
    const pythonProcess = spawn("python", [
      "-u",
      scriptPath,
      jsonAddingDoubleQuotes,
    ]);

    let result = "";

    pythonProcess.stdout.on("data", (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.log(data.toString()); // Imprimir el error estándar de Python
      reject(data.toString());
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        reject(`Python process exited with code ${code}`);
      } else {
        try {
          const parsedResult = JSON.parse(result);
          console.log(parsedResult);
          resolve(parsedResult);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
};
