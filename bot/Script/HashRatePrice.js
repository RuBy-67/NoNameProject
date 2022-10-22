const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const HashratePrice = new Discord.Client({ intents});
const config = require("../json/config.json");

HashratePrice.login(config.token_HashratePrice);

HashratePrice.on("ready", async () => {
  console.log(`Bot ${HashratePrice.user.tag} est en ligne !!`);
});
