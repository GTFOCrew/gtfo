import Telegraf from 'telegraf'
import { help, start, arkangel } from './commands'
import { debug, error, replyMessage } from './middleware'
import { compliment, thumbsUp } from './reactions'

const bot = new Telegraf(process.env.BOT_TOKEN)

// development middleware
if (process.env.NODE_ENV !== 'production') {
  bot.use(debug)
}

// middleware
bot.catch(error)
bot.use(replyMessage)

// commands
bot.start(start)
bot.help(help)

// reactions
bot.hears(/\billo\b/gi, compliment)
bot.command('arkangel', arkangel)
bot.on('sticker', thumbsUp)

export default bot
