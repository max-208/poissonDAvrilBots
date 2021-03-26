const fs = require('fs');
const Discord = require('discord.js');
const tokens = JSON.parse(fs.readFileSync("tokens.json"));

for (let i = 0; i < tokens.tokens.length; i++) {
    const client = new Discord.Client();
    client.on('ready', () => {
        console.log("ready - " + client.user.username );
    })

    client.on('message', message => {
        if(message.author.id == tokens.users[i]){
            message.channel.send(message.content);
            message.delete();
        }
    });

    client.login(tokens.tokens[i])
}



