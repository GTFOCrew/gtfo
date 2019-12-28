import _ from 'lodash'
import Telegraf from 'telegraf'
import { replyMessage } from './middlewares'
import compliments from './data/compliments'

const bot = new Telegraf(process.env.BOT_TOKEN)

// middlewares
bot.use(replyMessage)

// commands
bot.start(ctx => ctx.reply('welcome'))
bot.help(ctx => ctx.reply('send me a sticker'))

// reactions
bot.hears('yo', ctx => ctx.replyMessage('wassup'))
bot.hears(/illo/gi, ctx => ctx.replyMessage(_.sample(compliments)))

// misc
bot.on('sticker', ctx => ctx.replyMessage('👍'))

export default bot
