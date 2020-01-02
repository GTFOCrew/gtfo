import fs from 'fs'

// adapted from https://github.com/telegraf/telegraf/issues/29
export default async ctx => {
  return ctx.replyWithVoice(
    {
      source: await fs.promises.readFile(`${__dirname}/../data/arkangel.opus`)
    },
    {
      reply_to_message_id: ctx.message.message_id
    }
  )
}
