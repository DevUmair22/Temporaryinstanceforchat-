class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, state, cData) {
        console.log("state", state);
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.state = state;
        this.cData = cData;


    }

    handleOptions = (options) => {
        let message = this.createChatBotMessage(
            "email.",
            // "do you wants to sell abc are you looking for consultant based on the answer refer to relevent department", 
            {
                // widget: "sales",
                loading: true,
                terminateLoading: true,
                // widget: 'overview',
                ...options
            }
        );

        this.addMessageToState(message);

        // message = this.createChatBotMessage(
        //     "Contact No.",
        //     // "do you wants to sell abc are you looking for consultant based on the answer refer to relevent department", 
        //     {
        //         // widget: "sales",
        //         loading: true,
        //         terminateLoading: true,
        //         // widget: 'overview',
        //         ...options
        //     }
        // );

        // this.addMessageToState(message);


        // message = this.createChatBotMessage(

        //     "do you wants to sell abc are you looking for consultant based on the answer refer to relevent department",
        //     {
        //         // widget: "sales",
        //         loading: true,
        //         terminateLoading: true,
        //         widget: 'overview',
        //         delay: 400,
        //         ...options
        //     }
        // );
        // this.addMessageToState(message);

    };

    // handleContact = () => {
    //     let message = this.createChatBotMessage(
    //         "Contact No?",
    //         {
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true,
    //             // widget: "subWidget"
    //         }
    //     );

    //     this.addMessageToState(message);
    // };


    handleName = () => {

        console.log("====> you provided the name", this.state)

        let message = this.createChatBotMessage(
            "Enter your email address",
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                current: 2,
                question: "Email",
                validate: false
                // widget: "subWidget"
            }
        );

        this.addMessageToState(message);
    };
    handleEmail = () => {
        console.log("====> ", this.state)
        let
            message = this.createChatBotMessage(
                "Enter your contact No",
                {
                    loading: true,
                    terminateLoading: true,
                    withAvatar: true,
                    current: 3,
                    question: "Contact",
                    validate: true
                    // widget: "subWidget"
                }
            );

        this.addMessageToState(message);
    };
    handleUserMessages = (messages) => {
        // console.log(this.state, "state in handle");
        // let userMessage = this.state.messages;

        let filtered = messages.filter((message) => message.type === "user")
        // console.log("first", userMessage, "filtered", filtered)
        // return this.setState((state) => ({
        //     ...state,

        //     userMessages: [...state.messages, filtered]
        // }));
        console.log("filtered", filtered);
        return filtered

    }
    handleContact = () => {
        console.log("====> ", this.state)
        let message = this.createChatBotMessage(
            "wellcome ",
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,

                widget: "overview"
            }
        );

        this.addMessageToState(message);
        // this.handleUserMessages();

    };

    // handleSubmit = () => {
    //     let message = this.createChatBotMessage(
    //         "Thank You so Much For giving details",
    //         {
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true,
    //             // widget: "subWidget"
    //         }
    //     );

    //     this.addMessageToState(message);
    //     message = this.createChatBotMessage(
    //         "Do you wants to sell abc are you looking for consultant based on the answer refer to relevent department.",
    //         {
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true,
    //             widget: "overview"
    //         }
    //     );

    //     this.addMessageToState(message);
    // };
    handleGlobalStats = () => {
        let message = this.createChatBotMessage(
            "Sales",
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                widget: "subWidget"
            }
        );

        this.addMessageToState(message);
    };

    handleMarketing = () => {
        let message = this.createChatBotMessage(
            "Marketing.",
            {
                widget: "Marketing",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                // widget: "subWidget"
            }
        );

        this.addMessageToState(message);
    };

    handleLocalStats = () => {
        const message = this.createChatBotMessage(
            "Finace.",
            {
                widget: "Finace",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                widget: "subWidget"
            }
        );

        this.addMessageToState(message);
    };
    handleLocalStats = () => {
        const message = this.createChatBotMessage(
            "Marketing.",
            {
                widget: "Marketing",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                widget: "subWidget"
            }
        );

        this.addMessageToState(message);
    };

    handleFinace = () => {
        const message = this.createChatBotMessage(
            "Finace.",
            {
                widget: "Finace",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                widget: "subWidget"

            }
        );

        this.addMessageToState(message);
    };

    handleTechnical = () => {
        const message = this.createChatBotMessage(
            "Tachnical",
            {
                widget: "Tachnical",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
                widget: "subWidget"

            }
        );

        this.addMessageToState(message);
    };

    handleJoke = () => {
        var jokes = [
            "So many coronavirus jokes out there, it’s a pundemic!",
            "I’ll tell you a coronavirus joke now, but you’ll have to wait two weeks to see if you got it!",
            "Did you hear the joke about coronavirus? Never mind, I don’t want to spread it around!",
            "What should you do if you don’t understand a coronavirus joke? Be patient!",
            "Why do they call it the novel coronavirus? It’s a long story...",
            "Since we’re all in quarantine I guess we’ll be making only inside jokes from now on!"
        ];

        var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        const message = this.createChatBotMessage(randomJoke);

        this.addMessageToState(message);
    };

    handleThanks = () => {
        const message = this.createChatBotMessage("You're welcome, and stay safe!");

        this.addMessageToState(message);
    };



    handleValidation = () => {
        let message = this.createChatBotMessage(
            "Invalid name format",
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,
            }
        );

        this.addMessageToState(message);
        message = this.createChatBotMessage(
            "Please Enter your name without spaces",
            {
                loading: true,
                withAvatar: true,
                delay: 400,
                current: 1,
                question: "Name",

            }
        );

        this.addMessageToState(message);
    }


    handleEmailValidation = () => {
        let message = this.createChatBotMessage(
            "Invalid Email format",
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,
            }
        );

        this.addMessageToState(message);
        message = this.createChatBotMessage(
            "Re-enter your Email",
            {
                loading: true,
                withAvatar: true,
                delay: 400,
                current: 2,
                question: "Email",

            }
        );





        this.addMessageToState(message);
    }




    handleContactValidation = () => {
        let message = this.createChatBotMessage(
            `Invalid Format "01234567891"`,
            {
                loading: true,
                terminateLoading: true,
                withAvatar: true,
            }
        );

        this.addMessageToState(message);
        message = this.createChatBotMessage(
            "Re-enter Contact No",
            {
                loading: true,
                withAvatar: true,
                delay: 400,
                current: 3,
                question: "Contact",
                // widget: "subWidget"


            }
        );





        this.addMessageToState(message);
    }



    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));

    };

    // addCustomerData = (message) => {
    //     cData = []
    // }
}

export default ActionProvider;
