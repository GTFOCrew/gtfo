import 'regenerator-runtime'
import bot from '.'

bot.token = process.env.BOT_TOKEN_LOCAL
bot.startPolling()

console.debug('> bot ready')
