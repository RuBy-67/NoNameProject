const Discord = require("discord.js");
const loadsSlashsCommands = require("../Loaders/loadSlashCommands");

module.exports = async (bot) => {
  await loadsSlashsCommands(bot);
  console.log(`${bot.user.tag} est en ligne !`);
};
