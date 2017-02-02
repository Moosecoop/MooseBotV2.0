const commando = require('discord.js-commando');

class AboutCommand extends commando.Command {
    constructor(client) {
      super(client, {
        name: 'invite',
        group: 'info',
        memberName: 'invite',
        description: `Invite MooseBot to your server!`
      });
    }

    async run(message, args) {
      message.channel.sendMessage(`Invite MooseBot to your server! https://bot.moosecoop.com !`);
    }
}

module.exports = AboutCommand;
