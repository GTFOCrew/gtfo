import _ from 'lodash'
import quotes from '../data/famousQuotes'

export default ctx => ctx.replyMessage(_.sample(quotes))
