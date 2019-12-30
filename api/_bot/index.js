import Telegraf from 'telegraf'
import { debug, replyMessage } from './middlewares'
import { help, start } from './commands'
import { compliment, thumbsUp } from './reactions'

const bot = new Telegraf(process.env.BOT_TOKEN)

if (process.env.NODE_ENV !== 'production') {
  bot.use(debug)
}

bot.use(replyMessage)
bot.start(start)
bot.help(help)
bot.hears(/(^|\s)illo/gimu, compliment)
bot.on('sticker', thumbsUp)

export default bot
