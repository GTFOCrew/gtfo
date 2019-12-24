import fs from 'fs'
import path from 'path'
import Telegraf from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)

const compliments = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/_data/compliments.json'))
)

bot.start(ctx => ctx.reply('welcome'))
bot.help(ctx => ctx.reply('send me a sticker'))
bot.on('sticker', ctx => ctx.reply('👍'))
bot.hears('yo', ctx => ctx.reply('wassup'))

bot.hears('illo', ctx =>
  ctx.reply(compliments[Math.floor(Math.random() * compliments.length)])
)

export default bot.webhookCallback('/api/bot')
