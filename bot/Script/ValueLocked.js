const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const ValueLocked = new Discord.Client({ intents });
const config = require("../json/config.json");

ValueLocked.login(config.token_ValueLocked);

ValueLocked.on("ready", async () => {
  console.log(`Bot ${ValueLocked.user.tag}est en ligne !!`);
});
