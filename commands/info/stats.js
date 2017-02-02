const commando = require('discord.js-commando');

class StatsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stats',
            group: 'info',
            memberName: 'stats',
            description: `Shows stats for MooseBot`
        });
    }

    async run(message, args) {
        function secondsToString(seconds) {
            var numyears = Math.floor(seconds / 31536000);
            var numdays = Math.floor((seconds % 31536000) / 86400);
            var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
            var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
            var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
            return numyears + " years " + numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";
        }

        var uptimeHR = secondsToString(this.client.uptime);
        message.channel.sendMessage(`\`\`\`Region: North America\n Guilds: ${this.client.guilds.size}\n Users: ${this.client.users.size}\n Channels: ${this.client.channels.size}\n Uptime: ${uptimeHR}\`\`\``);
    }
}

module.exports = StatsCommand;
