const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log(`Ready.`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong! `" + client.ping + "`ms);
  } else
  if (message.content.startsWith(prefix + "hello")) {
    message.channel.send({embed: {
  color: 3447003,
  title: "Hello, " + message.author +"."
  }
});

client.login(config.token);
