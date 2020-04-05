import _ from 'lodash'
import quotes from '../data/json/quotes'

export default ctx => ctx.replyMessage(_.sample(quotes))
