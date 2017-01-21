const commando = require('discord.js-commando');

class purgeCommand extends commando.Command {
    constructor(client) {
      super(client, {
        name: 'purge',
        group: 'moderation',
        memberName: 'purge',
        description: 'purges the last 10 messages'
      });
    }

    async run(message, args) {
      message.reply("Purge Command Not Done");
    }
}

module.exports = DiceRollCommand;
