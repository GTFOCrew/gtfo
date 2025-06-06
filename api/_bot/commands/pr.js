import fs from 'fs'
import { data } from '../fn.js'

export default async (ctx) =>
  ctx.replyWithPhoto(
    {
      source: await fs.promises.readFile(data('img/pr.jpg'))
    },
    {
      reply_to_message_id: ctx.message.message_id
    }
  )
