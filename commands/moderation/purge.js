const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
    constructor(client) {
      super(client, {
        name: 'purge',
        group: 'moderation',
        memberName: 'purge',
        description: 'purges the last 25 messages'
      });
    }

    async run(message, args) {
      let usrMngMsgs = message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES");
      if(usrMngMsgs) {
        channel.bulkDelete(25);
      }
    }
}

module.exports = PurgeCommand;
