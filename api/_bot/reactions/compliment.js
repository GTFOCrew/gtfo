import _ from 'lodash'
import compliments from '../data/json/compliments'

export default ctx => ctx.replyMessage(_.sample(compliments))
