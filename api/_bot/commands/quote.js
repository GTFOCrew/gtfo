import _ from 'lodash'
import quotes from '../data/json/quotes.json' with { type: 'json' }

export default (ctx) => ctx.replyMessage(_.sample(quotes))
