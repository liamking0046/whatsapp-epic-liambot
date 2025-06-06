const path = require('path');

module.exports = async (sock, jid) => {
  const menuText = `*📜 Liam's Bot Menu*\n👑 *Owner:* Liam Arendsen\n📱 *Contact:* 0833098338\n🎮 *Type .help for all 350+ commands!*`;

  await sock.sendMessage(jid, {
    image: { url: path.join(__dirname, '../../media/wallpapers/onepiece.gif') },
    caption: menuText,
  });
};
