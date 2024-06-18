import sys
import json
from sentence_transformers import SentenceTransformer

def generate_embeddings(texts):
    try:
        model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
        embeddings = model.encode(texts)
        return embeddings.tolist()  # Corregir el método, debe ser tolist() en lugar de toList()
    except Exception as e:
        return []

if __name__ == "__main__":
    try:
        texts = eval(sys.argv[1])
        embeddings = generate_embeddings(texts)
        print(json.dumps(embeddings))
    except Exception as e:
        sys.exit(1)