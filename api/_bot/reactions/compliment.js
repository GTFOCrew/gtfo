import _ from 'lodash'
import compliments from '../data/json/compliments.json' with { type: 'json' }

export default (ctx) => ctx.replyMessage(_.sample(compliments))
