const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js-commando');

class EmbedCommand extends commando.Command {
    constructor(client) {
      super(client, {
        name: 'embed',
        group: 'testing',
        memberName: 'embed',
        description: `embed testing`
      });
    }

    async run(message, args) {
      let embed = new RichEmbed();
        embed.setColor(0);
        embed.setAuthor(message.member.displayName,message.member.user.displayAvatarURL);
        embed.setDescription(`Hello World!`);
        message.channel.sendEmbed(embed);
    }
}

module.exports = EmbedCommand;
