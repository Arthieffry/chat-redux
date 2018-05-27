import React, { Component } from 'react';

import { emojify } from 'react-emojione';


const stringToColour = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

class Message extends Component {
  render() {
    return (
      <div className="message">
        <h5>
          <span style={{ color: stringToColour(this.props.message.author) }}>
            {this.props.message.author}
          </span>
          <em> - {this.props.message.created_at.slice(11, -5)}</em>
        </h5>
        <p>{emojify(this.props.message.content, { output: 'unicode' }) }</p>
      </div>
    );
  }
}

export default Message;

