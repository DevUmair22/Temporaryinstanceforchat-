import React, { useState, useRef, useEffect } from 'react';
import './chatboard.css'
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ChatbotComponent from './ChatbotComponent';
import { Chatbot } from 'react-chatbot-kit';
import MessageParser from './MessageParser'; // Make sure you have this file
import ActionProvider from './ActionProvider'; // Make sure you have this file
import config from './config';

function Chatboard() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messageContainerRef = useRef(null);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the message container when new messages are added
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-header">
                <p>Chat</p>
            </div>
            <div className="message-container" ref={messageContainerRef}>
                {messages.map((message, index) => (
                    <div key={index} className="message">{message}</div>
                ))}
                {/* <ChatbotComponent /> */}
                {/* <Chatbot
                    headerText='Ijlal Ki Chats'
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                /> */}
            </div>
            <div className="input-container">
                <div className="row">
                    <div className="col-12">
                        <input
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="message-input"
                        />
                    </div>
                </div>
                <div className="row send-btn-row">
                    <div className="col-6 icon-row gap-2">
                        <BsEmojiSmile className=' ' />
                        <RiDeleteBin6Line />
                    </div>
                    <div className="col-6">
                        <button
                            onClick={handleSendMessage}
                            className="send-button"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* <Chatbot
                config={{
                    initialMessages: [
                        { id: 'welcome', message: 'Hi there! How can I assist you?', delay: 1000 },
                    ],
                }}
                messageParser={MessageParser}
                actionProvider={new ActionProvider()} // Instantiate ActionProvider here
            /> */}
        </div>
    );
}

export default Chatboard;
