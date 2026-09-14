# 🤖 WhatsApp Group Cloner Bot

Bot WhatsApp para clonar grupos - raspar membros e duplicar configurações. Pronto para usar, sem programação necessária.

## 📋 Funcionalidades

- ✅ Conectar ao WhatsApp via QR Code
- ✅ Listar membros de grupos
- ✅ Clonar grupos existentes
- ✅ Duplicar configurações de grupo
- ✅ Gerenciar sessões persistentes
- ✅ Suporte a comandos via chat

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** v14 ou superior
- **npm** ou **yarn**
- **WhatsApp** instalado no seu telefone

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/adriano1308/whatsapp-group-cloner.git
cd whatsapp-group-cloner
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

4. **Inicie o bot:**
```bash
npm start
```

5. **Escaneie o QR Code:**
   - Abra o WhatsApp no seu telefone
   - Vá para **Configurações > Linked Devices (Aparelhos Vinculados)**
   - Aponte a câmera para o QR Code exibido no terminal

## 📱 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `!clonar` | Clona o grupo atual |
| `!membros` | Lista membros do grupo |
| `!info` | Mostra informações do grupo |

## 🔧 Desenvolvimento

Para modo desenvolvimento com auto-reload:

```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
whatsapp-group-cloner/
├── index.js              # Arquivo principal do bot
├── package.json          # Dependências do projeto
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
├── session.json         # Sessão do WhatsApp (gerado automaticamente)
└── README.md            # Este arquivo
```

## 🔐 Segurança

- A sessão do WhatsApp é salva localmente em `session.json`
- Nunca compartilhe o arquivo `session.json` com outras pessoas
- Configure um `.env` seguro com suas credenciais
- Sempre use um `.gitignore` para proteger dados sensíveis

## ⚠️ Avisos Importantes

- Este bot utiliza a biblioteca **whatsapp-web.js** que simula um cliente web do WhatsApp
- O WhatsApp pode bloquear contas que usam bots automaticamente
- Use por sua conta e risco
- Respeite os termos de serviço do WhatsApp

## 🐛 Troubleshooting

### Erro: "Could not read package.json"
```bash
# Verifique se você está no diretório correto
cd whatsapp-group-cloner
npm install
```

### Erro: "QR Code não aparece"
- Verifique se o terminal suporta caracteres especiais
- Tente reiniciar o bot: `npm start`

### Sessão expirada
- Delete o arquivo `session.json`
- Inicie o bot novamente
- Escaneie um novo QR Code

## 📦 Dependências Principais

- **whatsapp-web.js** - Cliente WhatsApp Web
- **qrcode-terminal** - Gerar QR Code no terminal
- **dotenv** - Gerenciar variáveis de ambiente
- **axios** - Requisições HTTP

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📧 Suporte

Para suporte, abra uma issue no repositório ou entre em contato.

---

**Desenvolvido com ❤️ por Adriano**
