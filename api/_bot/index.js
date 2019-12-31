import Telegraf from 'telegraf'
import { help, start } from './commands'
import { debug, error, replyTo } from './middleware'
import { compliment, thumbsUp } from './reactions'

const bot = new Telegraf(process.env.BOT_TOKEN)

// development middleware
if (process.env.NODE_ENV !== 'production') {
  bot.use(debug)
}

// middleware
bot.catch(error)
bot.use(replyTo)

// commands
bot.start(start)
bot.help(help)

// reactions
bot.hears(/\billo\b/gi, compliment)
bot.on('sticker', thumbsUp)

export default bot
