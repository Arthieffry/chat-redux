import React from 'react';
import MessageList from '../containers/message_list.jsx';
import ChannelList from '../containers/channel_list.jsx';

const App = () => {
  return (
    <div className="app">
      <div className="logo">
        <img
          src="../../assets/images/lewagon.png"
          alt="lewagon.png"
          height="75px"
          width="75px"
        />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
