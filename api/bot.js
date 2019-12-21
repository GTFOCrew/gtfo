import Telegraf from 'telegraf'
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply('welcome'))
bot.help(ctx => ctx.reply('send me a sticker'))
bot.on('sticker', ctx => ctx.reply('👍'))
bot.hears('yo', ctx => ctx.reply('wassup'))

export default bot.webhookCallback('/api/bot')
