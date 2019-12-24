import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import Telegraf from 'telegraf'

const compliments = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/_data/compliments.json'))
)

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(ctx => ctx.reply('welcome'))
bot.help(ctx => ctx.reply('send me a sticker'))
bot.on('sticker', ctx => ctx.reply('👍'))
bot.hears('yo', ctx => ctx.reply('wassup'))
bot.hears(/illo/gi, ctx => ctx.reply(_.sample(compliments)))

export default bot.webhookCallback('/api/bot')
