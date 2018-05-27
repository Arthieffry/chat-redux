// TODO: add and export your own actions
export const SET_MESSAGES = "SET_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const SELECT_CHANNEL = "SELECT_CHANNEL";

export function setMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = {
    channel,
    author,
    content,
  };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  console.log(url);
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function selectChannel(selectedChannel) {
  return {
    type: SELECT_CHANNEL,
    payload: selectedChannel
  };
}
