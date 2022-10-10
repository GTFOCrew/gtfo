import createBot from '.'

const bot = createBot(process.env.BOT_TOKEN_LOCAL)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

console.debug('> bot ready')
