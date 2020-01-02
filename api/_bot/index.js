import Telegraf from 'telegraf'
import { help, start, arkangel, eqSolver } from './commands'
import { argParser, debug, error, replyMessage } from './middleware'
import { compliment, thumbsUp } from './reactions'

const bot = new Telegraf(process.env.BOT_TOKEN)

// development middleware
if (process.env.NODE_ENV !== 'production') {
  bot.use(debug)
}

// middleware
bot.catch(error)
bot.use(replyMessage)
bot.use(argParser)

// commands
bot.start(start)
bot.help(help)
bot.command('arkangel', arkangel)
bot.command('solve', eqSolver)

// reactions
bot.hears(/\billo\b/gi, compliment)
bot.on('sticker', thumbsUp)

export default bot
