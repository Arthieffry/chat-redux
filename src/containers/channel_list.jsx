import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel !== nextProps.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  bolder = (channel) => {
    if (channel === this.props.selectedChannel) {
      return (<p className="selected">#{channel}</p>);
    } {
      return (<p>#{channel}</p>);
    }
  }

  handleClick = (event) => {
    this.props.selectChannel(event.target.innerText.slice(1));
  }

  render() {
    return (
      <div className="channel-list">
        <h3>Channels</h3>
        <a onClick={this.handleClick}>
          {this.props.channels
            .map(channel => this.bolder(channel))}
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectChannel: selectChannel,
      setMessages: setMessages
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
