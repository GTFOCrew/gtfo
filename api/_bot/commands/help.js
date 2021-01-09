const helpMessage = `GTFO Bot Commands:
/start - init the bot
/help - print command list
/arkangel - reply with an amazing audio
/pr - aseptame la PR
/quote - get a random quote
/solve a b c - quadratic equation solver`

export default (ctx) => ctx.replyMessage(helpMessage)
