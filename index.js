require('dotenv').config();
const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) throw new Error('BOT_TOKEN bulunamadı.');

const bot = new Telegraf(BOT_TOKEN);

// Komutlar
bot.start(ctx => ctx.reply('Merhaba! Bot çalışıyor 🚀'));
bot.hears(/selam/i, ctx => ctx.reply('selam!'));
bot.hears(/patron|admin/i, ctx => ctx.reply('tek sahibim beliyna'));
bot.on('text', ctx => ctx.reply('mesajını aldım'));

// Botu başlat
bot.launch().then(() => console.log('Bot çalışıyor'));

// Kapatma durumları
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

