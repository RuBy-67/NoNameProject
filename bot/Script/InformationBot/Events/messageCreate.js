const Discord = require("discord.js");
module.exports = async (bot, message) => {
  let prefix = "$";
  let messageArray = message.content.split("");
  let commandName = messageArray[0].slice(prefix.length);
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return;

  let command = require(`../command/${commandName}`);
  if (!command) return message.reply("rien n'existe à ce sujet");

  command.run(bot, message, args);
};
