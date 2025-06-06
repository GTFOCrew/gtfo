import createBot from './_bot/index.js'

export default (req, res) => {
  const bot = createBot(process.env.BOT_TOKEN)

  bot.webhookCallback('/api/bot')(req, res)
}
