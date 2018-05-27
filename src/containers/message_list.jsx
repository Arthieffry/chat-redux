import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.setMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.setMessages(), 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  setMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  displayMessages = () => {
    return this.props.messages
      .map(message => <Message message={message} key={message.id} />);
  }

  render() {
    return (
      <div className="message-list">
        <h1>Channel #{this.props.selectedChannel}</h1>
        <hr/>
        <div className="messages-content" ref={(list) => { this.list = list; }}>
          {this.displayMessages()}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
