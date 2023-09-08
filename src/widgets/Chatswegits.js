import Options from "./Options";

const Chatswehits = (props) => {
    const options = [
        {
            name: "vedio call",
            handler: props.actionProvider.handlevediocall,
            id: 1
        },
        {
            name: "voice call",
            handler: props.actionProvider.
                handlevoicecall,
            id: 2
        },
        {
            name: "Whatsapp",
            handler: props.actionProvider.handlewhatsapp,
            id: 3
        },
        {
            name: "SMS",
            handler: props.actionProvider.handlesms,
            id: 4
        }
    ];
    return <Options options={options}  {...props} />;
};

export default Chatswehits;
