const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


  if (command === `check`) {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('checked!');
}
  else if (command === `smth`) {
    message.channel.send('something else happened');

  }else if (command === `server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
}
else if (command === `user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
else if (command === `m`) {
  // const channel1 = message.member.voice.channel;
  // message.channel.send(message.member.voice.name);
  //       for (const member of channel1.members) {
  //           member.voice.setMute(true);
  //       }
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    member.voice.setMute(true);
  }
        message.channel.send('muted');
}
else if (command === `u`) {
  // const channel1 = message.member.voice.channel;
  // message.channel.send(message.member.voice.name);
  //       for (const member of channel1.members) {
  //           member.voice.setMute(true);
  //       }
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    member.voice.setMute(false);
  }
        message.channel.send('unmuted');
}
    else if (command === `start`) {
	message.channel.send(`Muted`);
//
	message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1})
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('you reacted with a thumbs up.');
		} else {
			message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
//	    
}
});

client.login(process.env.token);
