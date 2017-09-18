const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "placeholder for the token"
bot.on('ready', () => {
  bot.log(`Logged in as user: ${client.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'r!testing') {
    msg.reply('testing');
  }
});

bot.on('message', msg => {
  if (msg.content === 'r!randnumtest') {
    msg.reply(Math.floor(Math.random() * 100);
  }
});

bot.login(token);
