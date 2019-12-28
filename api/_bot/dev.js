import bot from '.'

console.log('> Running bot')

bot.token = process.env.BOT_TOKEN_LOCAL
bot.startPolling()
