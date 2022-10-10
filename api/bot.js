import createBot from './_bot'
import domains from './_bot/domains'

export default (req, res) => {
  const bot = createBot(process.env.BOT_TOKEN)

  bot.webhookCallback('/api/bot')(req, res)
}
