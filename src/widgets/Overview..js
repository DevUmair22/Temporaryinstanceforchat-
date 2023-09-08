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

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Sales",
      handler: props.actionProvider.handleGlobalStats,
      id: 1
    },
    {
      name: "Marketing",
      handler: props.actionProvider.
      handleMarketing,
      id: 2
    },
    {
      name: "Finace",
      handler: props.actionProvider.  handleFinace,
      id: 3
    },
    {
      name: "Technical",
      handler: props.actionProvider.handleTechnical,
      id: 4
    },
    
    // {
    // name: "vediocall",
    //   handler: props.actionProvider.handleVediocall,
    //   id: 5
    // },
    // {
    //   name: "VoiceCall",
    //   handler: props.actionProvider.
    //   handleVoiceCall,
    //   id: 6
    // },
    // {
    //   name: "Whatsapp",
    //   handler: props.actionProvider.  handleWhatsapp,
    //   id: 7
    // },
    // {
    //   name: "SMS",
    //   handler: props.actionProvider.handleSms,
    //   id: 8
    // }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
