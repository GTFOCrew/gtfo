import { Telegraf } from 'telegraf'
import {
  arkangel,
  help,
  math,
  pr,
  quote,
  solve,
  start
} from './commands/index.js'
import { argParser, debug, error, replyMessage } from './middleware/index.js'
import { compliment } from './reactions/index.js'

const createBot = (botToken) => {
  const bot = new Telegraf(botToken)

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
  bot.command('math', math)
  bot.command('pr', pr)
  bot.command('quote', quote)
  bot.command('solve', solve)

  // reactions
  bot.hears(/\billo\b/gi, compliment)
  // bot.on('sticker', thumbsUp) // NOTE removed by popular request

  return bot
}

export default createBot
