const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");

let xp = require("./xp_system/xp.json");

const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} server${bot.guilds.size > 1 ? "s" : ""}`);
    bot.user.setActivity("XP king");
});

console.log("");


bot.on("message", (message) => {
    if(message.author.bot) return;

    const attachedImg = message.attachments.first();

    const xpEarned = () => {
        if(attachedImg){
            message.channel.sendMessage("I have an attachment!");
            return Math.floor(Math.random() * 30) + 8;
        }
        else {
            message.channel.sendMessage("I do not have an image");
            return Math.floor(Math.random() * 10) + 8;
        }
    }
    
    console.log(xpEarned());

    // let xpAdd = Math.floor(Math.random() * 7) + 8;
    
    // if(!xp[message.author.id]){
    //     xp[message.author.id] = {
    //         xp: 0,
    //         level: 1
    //     };
    // }
    
    // let player = xp[message.author.id];
    // let nxtLvl = player.level * 300;
    
    // player.xp = player.xp + xpAdd;

    // if(nxtLvl <= player.xp){
    //     player.level += 1;
    //     console.log(`level is ${player.level}`)
    // }

    // fs.writeFile("./xp_system/xp.json", JSON.stringify(xp), (err) => {
    //     if(err) console.log(err)
    // });

    // if(message.content[0] === botconfig.prefix){
    //     const command = message.content.split("!");
        
    //     if(command[1] === "play"){

    //         return message.channel.send("Hello");
    //     }
    // }
});

bot.login(botconfig.token);
