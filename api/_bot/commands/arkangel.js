import fs from 'fs'
import { data } from '../fn.js'

// adapted from https://github.com/telegraf/telegraf/issues/29
export default async (ctx) =>
  ctx.replyWithVoice(
    {
      source: await fs.promises.readFile(data('audio/arkangel.opus'))
    },
    {
      reply_to_message_id: ctx.message.message_id
    }
  )
