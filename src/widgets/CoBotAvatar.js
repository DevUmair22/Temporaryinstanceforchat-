import React from "react";

import BotAvatar from "../assets/icons/bot.svg";

export default function () {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none" }}
            >
                <img alt="BotAvatar" src={BotAvatar} />
            </div>
        </div>
    );
};

