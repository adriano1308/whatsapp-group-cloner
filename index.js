const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

const SESSION_FILE_PATH = './session.json';

let client;

// Carregar sessão se existir
const loadSession = () => {
  if (fs.existsSync(SESSION_FILE_PATH)) {
    const sessionData = require(`./${SESSION_FILE_PATH}`);
    return sessionData;
  }
  return null;
};

// Salvar sessão
const saveSession = (session) => {
  fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(session));
};

// Inicializar cliente
const initializeClient = () => {
  const sessionData = loadSession();
  
  const options = {
    headless: false,
    devtools: false
  };

  if (sessionData) {
    options.session = sessionData;
  }

  client = new Client(options);

  // QR Code para login
  client.on('qr', (qr) => {
    console.log('\n📱 Escaneie este QR Code com seu WhatsApp:');
    qrcode.generate(qr, { small: true });
  });

  // Cliente pronto
  client.on('ready', () => {
    console.log('✅ Bot conectado com sucesso!');
  });

  // Salvar sessão quando autenticado
  client.on('authenticated', (session) => {
    saveSession(session);
    console.log('✅ Sessão salva!');
  });

  // Mensagens recebidas
  client.on('message', async (message) => {
    console.log(`📨 Mensagem de ${message.from}: ${message.body}`);

    // Responder a comando de clone
    if (message.body.toLowerCase() === '!clonar') {
      if (message.isGroupMsg) {
        const chat = await message.getChat();
        const groupMembers = await chat.getGroupMetadata();
        console.log(`👥 Grupo: ${chat.name}`);
        console.log(`👤 Total de membros: ${groupMembers.participants.length}`);
        
        message.reply('🔄 Iniciando clonagem do grupo...');
      } else {
        message.reply('❌ Este comando só funciona em grupos!');
      }
    }
  });

  // Desconectado
  client.on('disconnected', () => {
    console.log('❌ Cliente desconectado');
    // Limpar arquivo de sessão
    if (fs.existsSync(SESSION_FILE_PATH)) {
      fs.unlinkSync(SESSION_FILE_PATH);
    }
  });

  // Iniciar cliente
  client.initialize();
};

// Iniciar aplicação
console.log('🚀 Iniciando WhatsApp Group Cloner Bot...');
initializeClient();

// Tratamento de erros
process.on('unhandledRejection', (err) => {
  console.error('❌ Erro não tratado:', err);
});
