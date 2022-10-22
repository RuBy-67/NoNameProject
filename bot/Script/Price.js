const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const Price = new Discord.Client({ intents});
const config = require("../json/config.json");

Price.login(config.token_Price);

Price.on("ready", async () => {
  console.log(`Bot ${Price.user.tag}est en ligne !!`);
});
