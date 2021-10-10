import createBot from './_bot'
import domains from './_bot/domains'

export default (req, res) => {
  const bot = createBot(
    req.headers.host !== domains.PRODUCTION
      ? process.env.BOT_TOKEN_DEV
      : process.env.BOT_TOKEN
  )

  bot.webhookCallback('/api/bot')(req, res)
}
