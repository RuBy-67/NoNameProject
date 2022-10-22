const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const Holder = new Discord.Client({ intents});
const config = require("../json/config.json");

Holder.login(config.token_Holder);

Holder.on("ready", async () => {
  console.log(`Bot ${Holder.user.tag} est en ligne !!`);
});
