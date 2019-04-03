import React from 'react';
import Header from './Header';
import TextArea from './TextArea';
import Messanges from './Messanges';

const Chat = props => (
    <div className="chat">
        <Header />
        <Messanges />
        <TextArea />
    </div>
);

export default Chat;