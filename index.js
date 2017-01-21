const commando = require('discord.js-commando');
const bot = new commando.Client();
const config = require('./config.json');

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);
