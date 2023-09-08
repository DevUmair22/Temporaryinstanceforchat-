// import O
// const GeneralOptions = (props) => {
//   const options = [
//     {
//       name: "Sales",
//       handler: props.actionProvider.handleGlobalStats,
//       id: 1
//     },
//     {
//       name: "Markiting",
//       handler: props.actionProvider.handleLocalStats,
//       id: 2
//     },
//     {
//       name: "Finace",
//       handler: props.actionProvider.handleContact,
//       id: 3
//     },
//     {
//       name: "Tactinal",
//       handler: props.actionProvider.handleMedicine,
//       id: 4
//     }
//   ];
//   return <Options options={options} title="Options" {...props} />;
// };

// export default GeneralOptions;


import Options from "./Options";

const SubSaleswegits = (props) => {
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
            handler: props.actionProvider.handleswhatsapp,
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

export default SubSaleswegits;
