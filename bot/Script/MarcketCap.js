const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const MarcketCap = new Discord.Client({ intents });
const config = require("../json/config.json");

MarcketCap.login(config.token_MarcketCap);

MarcketCap.on("ready", async () => {
  console.log(`Bot ${MarcketCap.user.tag} est en ligne`);
});
