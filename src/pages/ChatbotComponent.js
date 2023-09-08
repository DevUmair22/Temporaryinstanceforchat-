import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
// import ActionProvider from './ActionProvider'; // Make sure you have this file


function ChatbotComponent() {
  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotComponent;
