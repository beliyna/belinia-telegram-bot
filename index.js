require('dotenv').config();
const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) throw new Error('BOT_TOKEN bulunamadı. .env dosyasını kontrol et.');

const bot = new Telegraf(BOT_TOKEN);

// Komutlar
bot.start(ctx => ctx.reply('Merhaba! Bot çalışıyor 🚀'));
bot.hears(/selam/i, ctx => ctx.reply('selam!'));
bot.on('text', ctx => {
  const text = ctx.message.text.toLowerCase();
  if (text.includes('patron') || text.includes('admin')) {
    return ctx.reply('tek sahibim beliyna');
  }
  ctx.reply('mesajını aldım');
});

// Botu başlat
bot.launch().then(() => {
  console.log('Bot çalışmaya başladı...');
});

// Windows kapanırken düzgün dursun
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
