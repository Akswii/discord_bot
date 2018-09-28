const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} server${bot.guilds.size > 1 ? "s" : ""}`);
    bot.user.setActivity("End me");
});

bot.on("message", (message) => {
    if(message.author.bot) return;

    if(message.content[0] === botconfig.prefix){
        return message.channel.send("Hello");
    }
});

bot.login(botconfig.token);
