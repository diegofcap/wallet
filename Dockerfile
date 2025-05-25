FROM node:18

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    python3 \
    build-essential \
    openssh-client \
    && rm -rf /var/lib/apt/lists/*

# Instala Expo e EAS CLI globalmente
RUN npm install -g expo-cli eas-cli

# Cria diretório da aplicação
WORKDIR /app

# Copia arquivos do projeto
COPY . .

# Instala dependências do projeto
RUN npm install

# Autenticador opcional (você pode usar EAS_TOKEN via ENV)
# RUN eas login

CMD [ "bash" ]
