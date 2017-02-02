const commando = require('discord.js-commando');

class AboutCommand extends commando.Command {
    constructor(client) {
      super(client, {
        name: 'about',
        group: 'info',
        memberName: 'about',
        description: `Shows information about MooseBot`
      });
    }

    async run(message, args) {
      message.channel.sendMessage(`\`\`\`MooseBot is a Discord Bot made by Moosecoop in Discord.js! For MooseBot stats type &stats\`\`\``);
    }
}

module.exports = AboutCommand;
