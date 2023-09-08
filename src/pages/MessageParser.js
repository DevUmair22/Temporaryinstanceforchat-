class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        message = message.toLowerCase();

        const messageLength = this.state.messages.length;

        const question = this.state.messages[messageLength - 1]?.question;
        const current = this.state.messages[messageLength - 1]?.current;
        console.log(this.state.messages[messageLength - 1])
        if (question && question === "Name" && current === 1) {
            //NEXTT QUESTION RESPONSE
            //ActionProvider.name
            if (message === '' || message === null || !message.match(/^[a-zA-Z]*$/)) {
                return this.actionProvider.handleValidation({ withAvatar: true });

            } else {
                return this.actionProvider.handleName();

            }

        }
        else if (question && question === "Email" && current === 2) {
            //NEXTT QUESTION RESPONSE
            //ActionProvider.email
            if (!message.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return this.actionProvider.handleEmailValidation({ withAvatar: true });
            } else {
                return this.actionProvider.handleEmail({ withAvatar: true });
            }
        }
        else if (question && question === "Contact" && current === 3) {
            //NEXTT QUESTION RESPONSE
            //ActionProvider.email
            if (!message.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
                return this.actionProvider.handleContactValidation({ withAvatar: true });

            } else {
                return this.actionProvider.handleContact({ withAvatar: true });
            }
        }




        else {
            //Invalid email
            // ActionProvider.invalid email

        }


        // if (question && question === "Contact" && current === 3) {
        //     //NEXTT QUESTION RESPONSE
        //     //ActionProvider.phone

        //     if (!message.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
        //         return this.actionProvider.handleContactValidation({ withAvatar: true });

        //     } else {
        //         return this.actionProvider.handleContact({ withAvatar: true });
        //     }



        // } else {
        //     //Invalid phone
        //     // ActionProvider.invalid phone


        // }

        return;


        if (
            message.includes("@") ||
            message.includes(".com")
        ) {
            return this.actionProvider.handleContact({ withAvatar: true });
        }
        if (
            message.includes("+92") ||
            message.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)
        ) {
            return this.actionProvider.handleSubmit({ withAvatar: true });
        }

        // if (
        //     message.includes("Sales") ||
        //     message.includes("Marketing") ||
        //     message.includes("Tactinal") ||
        //     message.includes("Finace") ||
        //     message.includes("emergency") ||
        //     message.includes("contact")
        // ) {
        //     return this.actionProvider.handleFinace();
        // }

        // if (
        //     message.includes("stats") ||
        //     message.includes("statistics") ||
        //     message.includes("deaths")
        // ) {
        //     return [
        //         this.actionProvider.handleGlobalStats(),
        //         this.actionProvider.handleLocalStats()
        //     ];
        // }

        // if (message.includes("medicine") || message.includes("delivery")) {
        //     return this.actionProvider.handleMedicine();
        // }

        // if (
        //     message.includes("joke") ||
        //     message.includes("jokes") ||
        //     message.includes("funny")
        // ) {
        //     return this.actionProvider.handleJoke();
        // }

        // if (message.includes("thanks") || message.includes("thank you")) {
        //     return this.actionProvider.handleThanks();
        // }

        return this.actionProvider.handleOptions({ withAvatar: true });
    }
}

export default MessageParser;
