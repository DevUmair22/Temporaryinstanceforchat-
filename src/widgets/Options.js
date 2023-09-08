import { useState } from "react";
import ActionProvider from "../pages/ActionProvider";

// const[count,setCount]=useState(0);
// const handleclick = (option)=>{
// setCount(1);
// option.handler()
// }
const Options = (props) => {
    // console.log("props", props);
    const [count, setCount] = useState(0);
    const handleclick = (option) => {
        console.log("data", option)
        // props.handleUserMessages();
        setCount(1);
        option.handler()
    }
    const actionProvider = new ActionProvider()

    const userMessages = actionProvider.handleUserMessages(props.messages)
    console.log("userMessages", userMessages);
    return (
        <div className="options">
            <h1 className="options-header">{props.title}</h1>
            <div className="options-container">
                {props.options.map((option) => {
                    return (
                        <button
                            className="option-item"
                            disabled={count == 1 ? true : false}
                            onClick={() => handleclick(option)}
                            key={option.id}
                        >
                            {option.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;
