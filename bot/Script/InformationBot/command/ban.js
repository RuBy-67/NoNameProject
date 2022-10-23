const Discord = require("discord.js");

module.exports = {
  name: "ban",
  description: " ban un membre",
  Permission: Discord.PermissionFlagsBits.BanMembers,
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "user to ban",
      required: true,
    },
    {
      type: "string",
      name: "raison",
      description: "Raison du banissement",
      required: false,
    },
  ],
  async run(bot, message, args) {
    try {
      let user = await bot.users.fetch(args._hoisetedOption[0].value);
      if (!user) return message.reply("pas de membre à Bannir");
      let member = message.guild.members.cache.get(user._id);
      let reason = args.get("raison").value;
      if (!reason) reason = "null";

      /// verfications de la possbilité de ban la personne
      if (message.user.id === user._id)
        return message.reply("NO! Don't ban youself! it's sad");
      if ((await message.guild.fetchOwner()).id === user.id)
        return message.reply("Don't Ban your boss!");
      if (member && member?.bannable)
        return message.reply("Never ban this members sadly you poor"); /// membre bannissable ?
      if (
        member &&
        message.member.roles.highest.comparePositionTo(member.roles.highest) <=
          0
      )
        return message.reply("membre + haut que toi");
      if ((await message.guild.bans.fetch()).get(user.id))
        return message.reply("Already Ban");

      // envoyer un message en Mp a la personne
      try {
        await user.send(
          `you are ban from **${message.guild.name}** by **${message.user.tag}** for : **${reason}**`
        );
      } catch (err) {}

      await message.reply(`**${message.user.tag}** ban ${user.tag}`);
    } catch (err) {
      return message.reply("Pas de membre à Bannir");
    }
  },
};
