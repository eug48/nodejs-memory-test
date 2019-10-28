#! /bin/bash
docker run -it --rm -v "$PWD":/app -w /app $1 node --max-old-space-size=100 main.js $2