import bot from './_bot'
import domains from './_bot/domains'

export default (req, res) => {
  if (req.headers.host !== domains.PRODUCTION)
    bot.token = process.env.BOT_TOKEN_DEV

  bot.webhookCallback('/api/bot')(req, res)
}
