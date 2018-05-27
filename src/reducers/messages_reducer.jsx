import { SET_MESSAGES, CREATE_MESSAGE } from '../actions/index';


export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE: {
      const allMessage = state.splice(0);
      allMessage.push(action.payload);
      return allMessage;
    }
    default:
      return state;
  }
}
