const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });
const loadcommands = require("./Loaders/loadCommands.js");
const config = require("../../json/config.json");

bot.commands = new Discord.Collection();

bot.login(config.token_Information);
loadcommands(bot);

bot.on("messageCreate", async (message) => {
  if (message.content === "!ping")
    return bot.commands.get("ping").run(bot, message);
});

bot.on("ready", async () => {
  console.log(`Bot ${bot.user.tag} est en ligne`);
});
