const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃       𝗔𝗗𝗠𝗜𝗡../...𝗔𝗟𝗟../...𝗜𝗡𝗙𝗢  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝗡𝗔𝗠𝗘     : 𝗛𝗔𝗡𝗝𝗔𝗟𝗔..𝗞𝗛𝗔𝗡..
┃ 🚹 𝗚𝗘𝗡𝗗𝗘𝗥   : 𝗠𝗔𝗟𝗘
┃ ❤️ 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡 : 𝗜𝗻 𝗖𝗶𝗺𝗽𝗹𝗶𝗰𝗮𝘁𝗲𝗱
┃ 🎂 𝗔𝗚𝗘       : 21
┃ 🕌 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡𝐑 : 𝗜𝘀𝗹𝗮𝗺
┃ 🏫 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡:𝗦𝘁𝘂𝗱𝗲𝗻𝘁
┃ 🏡 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 :𝗞𝗨𝗟𝗡𝗔..𝗕𝗔𝗡𝗚𝗟𝗔𝗗𝗘𝗦𝗛
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝗧𝗜𝗞𝗧𝗢𝗞  : to_love123
┃ 📢 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 :  https://m.me100087468194829
┃ 🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : https://fb.com/100087468194829
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲 𝘁𝗶𝗺𝗲:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/𝖧𝖠𝖭𝖩𝖠𝖫𝖠.jpg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/𝖧𝖠𝖭𝖩𝖠𝖫𝖠.jpg"));
  
    return request(encodeURI(`https://graph.facebook.com/100087468194829/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/𝖧𝖠𝖭𝖩𝖠𝖫𝖠.jpg'))
        .on('close', () => callback());
};
 
