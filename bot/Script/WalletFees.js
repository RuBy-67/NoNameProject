const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const WalletFees = new Discord.Client({ intents });
const config = require("../json/config.json");

WalletFees.login(config.token_WalletFees);

WalletFees.on("ready", async () => {
  console.log(`Bot ! ${WalletFees.user.tag} est en ligne !!`);
});
