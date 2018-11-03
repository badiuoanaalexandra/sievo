import {REQUEST_API_DATA} from '../actions/apiActions'
import {RECEIVE_API_DATA} from '../actions/apiActions'

export default (state = {}, {type, data}) => {
 switch (type) {
  case RECEIVE_API_DATA:
    return data;
  default:
   return state
 }
}
