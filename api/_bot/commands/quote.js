import _ from 'lodash'
import quotes from '../data/json/famousQuotes'

export default ctx => ctx.replyMessage(_.sample(quotes))
