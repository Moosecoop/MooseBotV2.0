const commando = require('discord.js-commando');
const config = require('./config.json');
const bot = new commando.Client({
    owner: config.ownerID,
    commandPrefix: '.',
    invite: 'botsupport.moosecoop.com',
    unknownCommandResponse: false
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.on('ready', () => {
    bot.user.setGame(".help | bot.moosecoop.com", "http://twitch.tv/monstercat");
});

bot.login(config.token);
