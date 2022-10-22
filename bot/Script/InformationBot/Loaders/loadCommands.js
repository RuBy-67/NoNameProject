const fs = require("fs");

module.exports = async (bot) => {
  fs.readdirSync("./bot/Script/InformationBot/command")
    .filter((f) => f.endsWith(".js"))
    .forEach(async (file) => {
      let command = require(`../command/${file}`);
      if (!command.name || typeof command.name !== "string")
        throw new TypeError(
          `La Commande ${file.slice(0, file.length - 3)} n'a pas de nom !`
        );
      bot.commands.set(command.name, command);
      console.log(`Command ${file} chargé avec succès !`);
    });
};
