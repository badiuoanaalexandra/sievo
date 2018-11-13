import {RECEIVE_VWWidth_CHANGE} from '../actions/uiActions'
import {getViewportWidth} from "../helpers/ui"

export default (state = getViewportWidth(), {type}) => {
 switch (type) {
  case RECEIVE_VWWidth_CHANGE:
    return getViewportWidth();
  default:
   return state
 }
}
