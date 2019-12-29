import Telegraf from 'telegraf'
import { replyMessage } from './middlewares'
import { help, start } from './commands'
import { compliment, thumbsUp } from './reactions'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(replyMessage)
bot.start(start)
bot.help(help)
bot.hears(/illo/gi, compliment)
bot.on('sticker', thumbsUp)

export default bot
