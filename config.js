const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "𝗛𝗜𝗥𝗨-𝗫-𝗠𝗗=JdxlyQ5S#I4tatDpQ1eXTa6ycyBMtl-4XWZOxJmv_cCpYXWsV1gs",
    // add your Session Id 

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_AI: process.env.AUTO_AI || 'false',
    // add your bot owner number

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto react on status 

    ANTI_CALL: process.env.ANTI_CALL || "true",

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY HIRU-X-MD🤍*",
    // set the auto reply message on status reply 

    WELCOME: process.env.WELCOME || "false",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "false",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    // make this true for custom emoji react 

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",

    LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *HIRU-X-MD*⚡",
    // add alive msg here 

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words 

    MODE: process.env.MODE || "public",
    // make bot public-private-inbox-group 

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing 

    READ_CMD: process.env.READ_CMD || "teue",
    // true if want mark commands as read 

    DEV: process.env.DEV || "94773024361",
    // replace with your whatsapp number         

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
    // make it true for auto recording 
};
