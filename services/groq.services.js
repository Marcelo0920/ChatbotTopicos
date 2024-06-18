import Groq from "groq-sdk";
import { obtenerTodosLosProductos } from "../controllers/producto.controller.js";

const groq = new Groq({
  apiKey: "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",
});

export async function GroqChatCompletion(user, content) {
  let productos = await obtenerTodosLosProductos();

  return await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Tu nombre es Paul y siempre haces chistes. Tambien eres organizador y vendedor de eventos de Bodas El usuario ${user} te ha escrito, si te pregunta por un producto lo buscas en el catalogo ${productos}, si es que tienes el producto se lo ofreces `,
      },
      {
        role: "user",
        content,
      },
    ],
    model: "mixtral-8x7b-32768",
    seed: 10,
    // 2000 Tokens, this is a fairly high limit, so longer texts are allowed. It’s great for applications that need detailed responses, like writing articles, reports, or stories. However, generating such a long sequence might increase computational demands and processing time.
    max_tokens: 1024,
    // A low temperature value like this biases the model towards more predictable, less varied text. It’s great for technical documentation or specific factual answers, where accuracy and relevance are more important than creativity.
    temperature: 0.2,
    // With this setting, tokens that cumulatively make up 80% of the probability mass are taken into account, which allows for a moderate level of creativity and variability. It’s a good balance that can keep the text coherent while adding diversity.
    top_p: 0.8,
  });
}
