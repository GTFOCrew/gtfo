import bot from '.'
import { debug } from './middlewares'

bot.token = process.env.BOT_TOKEN_LOCAL
bot.use(debug)
bot.startPolling()

console.debug('> bot ready')
