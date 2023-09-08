// import { createChatBotMessage } from "react-chatbot-kit";
// import Sales from "../widgets/Sales";
// import Marketing from "../widgets/Overview.";
// import Finace from "../widgets/Options";
// import Tactinal from "../widgets/Tactinal";
// import './chatboard.css'
// // import MedicineDelivery from "./widgets/MedicineDelivery";
// // import CoBotAvatar from "./CoBotAvatar";

// const config = {
//     lang: "no",
//     botName: "CoBot",
//     customStyles: {

//         botMessageBox: {
//             backgroundColor: "#04668a"
//         },
//         chatButton: {
//             backgroundColor: "#0f5faf"
//         }
//     },
//     initialMessages: [
//         createChatBotMessage(
//             `Hello`
//         ),
//         createChatBotMessage(
//             `i am your assitant`
//         ),
//         createChatBotMessage(
//             `can i please have follwing details`
//         ),
//         createChatBotMessage(
//             `1:Name`
//         ),
//         createChatBotMessage(
//             `2:email`
//         ),
//         createChatBotMessage(
//             "3:Contact No",

//             {
//                 withAvatar: false,
//                 delay: 400,
//                 widget: "overview"
//             }
//         )
//     ],
//     state: {},
//     // customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
//     widgets: [
//         {
//             widgetName: "Sales",
//             widgetFunc: (props) => <Sales {...props} />,
//             mapStateToProps: ["messages"]
//         },
//         {
//             widgetName: "techinal",
//             widgetFunc: (props) => <Tactinal />
//         },
//         {
//             widgetName: "Marketing",
//             widgetFunc: (props) => <Marketing />
//         },
//         {
//             widgetName: "Finace",
//             widgetFunc: (props) => <Finace />
//         }

//     ]
// };

// export default config;



import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../widgets/Overview.";
import LocalStatistics from "../widgets/LocalStatistics";
import Contact from "../widgets/Contact";
import MedicineDelivery from "../widgets/MedicineDelivery";
import GlobalStatistics from "../widgets/GlobalStatistics";
import CoBotAvatar from "../widgets/CoBotAvatar";
import SubSaleswegits from "../widgets/SubSaleswegits";

const config = {
    lang: "no",
    botName: "CoBot",
    questions: ["Name?", "Email?", "Contact No?"],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#04668a"
        },
        chatButton: {
            backgroundColor: "#0f5faf"
        }
    },
    initialMessages: [
        createChatBotMessage(
            `Hello, I am your assitant.`
        ),

        // createChatBotMessage(
        //     "i am your assitant.",
        //     {
        //         withAvatar: false,
        //         delay: 400,
        //         // widget: "overview"
        //     }
        // ),
        createChatBotMessage(
            "To continue, please provide me with the following details.",
            {
                withAvatar: false,
                delay: 400,
                // widget: "overview"
            }
        ),
        createChatBotMessage(
            // config.questions[0],
            "Enter Your Name without spaces",
            {
                withAvatar: false,
                delay: 400,
                question: "Name",
                current: 1,
                validate: true

                // widget: "overview"
            }
        ),
        // createChatBotMessage(
        //     // config.questions[0],
        //     "Email",
        //     {
        //         withAvatar: false,
        //         delay: 400,
        //         question: "Email",
        //         current: 2

        //         // widget: "overview"
        //     }
        // ),

        // createChatBotMessage(
        //     "2:Email.",
        //     {
        //         withAvatar: false,
        //         delay: 400,
        //         // widget: "overview"
        //     }
        // ),
        // createChatBotMessage(
        //     "2:Contactno.",
        //     {
        //         withAvatar: false,
        //         delay: 400,
        //         //  widget: "overview"
        //     }
        // )
    ],
    state: {},
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
    widgets: [
        {
            widgetName: "overview",
            widgetFunc: (props) => <Overview {...props} />,
            mapStateToProps: ["messages"]
        },
        {
            widgetName: "subWidget",
            widgetFunc: (props) => <SubSaleswegits {...props} />,
            mapStateToProps: ["messages"]
        },
        {
            widgetName: "globalStatistics",
            widgetFunc: (props) => <GlobalStatistics />
        },
        {
            widgetName: "localStatistics",
            widgetFunc: (props) => <LocalStatistics />
        },
        {
            widgetName: "emergencyContact",
            widgetFunc: (props) => <Contact />
        },
        {
            widgetName: "medicineDelivery",
            widgetFunc: (props) => <MedicineDelivery />
        }
    ]
};

export default config;
