import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { AiOutlineWechat } from 'react-icons/ai'; // Import your desired icon
import Chatboard from './Chatboard';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import Chatbot from 'react-chatbot-kit';

// const questions = ["Name?", "Email?", "Contact No?"]

export default function Clientwebsite() {
    const [showChat, setShowChat] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(config.questions[0])



    return (
        <div className="flex flex-col lg:flex-row text-center lg:text-justify justify-between items-center h-screen bg-gray-200">
            <div className="lg:ml-64">
                <h1 className="text-5xl font-bold">clientwebsite</h1>
            </div>

            {/* <div className="bg-white rounded lg:m-8 h-5/6 w-full lg:w-80">
                <p className='border bg-[blue] rounded-lg m-2 '>jsdhkj</p>
                <Chatboard />
            </div> */}

            {/* Icon to navigate to Chatboard */}

            {/* {showChat && <div className="bg-white rounded lg:m-8 h-5/6 w-full lg:w-80">
                <p className='border bg-[blue] rounded-lg m-2 '>chats</p> */}
            <div className='live-chat '>
                <div className="lg:mr-16 h-32  bottom-0 right-0 p-2 live-chat-icon">
                    {/* <Link to="/chatboard"> */}
                    <div onClick={() => setShowChat(!showChat)} >
                        <AiOutlineWechat className="h-16 w-16 bottom-0 text-blue-500  cursor-pointer" />
                    </div>
                    {/* </Link> */}
                </div>
                {/* <Chatboard/> */}
                {showChat && <Chatbot
                    headerText='Chats'
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}

                />}
            </div>
            {/* </div>} */}
        </div>
    );

    // Rest of your code...
}
