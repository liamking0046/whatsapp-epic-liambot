// Main bot logic using Baileys
const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveState);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
    const from = msg.key.remoteJid;

    if (text.startsWith('.menu')) {
      const menuText = `*Liam's Bot Menu*\n👑 Owner: Liam Arendsen\n📱 Contact: 0833098338`;
      await sock.sendMessage(from, {
        image: { url: './media/wallpapers/onepiece.gif' },
        caption: menuText,
      });
    }
  });
}

startBot();
