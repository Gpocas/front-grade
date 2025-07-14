# Use a imagem oficial do Bun
FROM oven/bun:1.2.18-slim

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY . .

# Instale as dependências
RUN bun install

# Build do projeto Vite
RUN bun run build

# Exponha a porta padrão do Vite (mude se necessário)
EXPOSE 4173

# Comando para rodar o servidor de preview do Vite
CMD ["bun", "run", "preview", "--host"]