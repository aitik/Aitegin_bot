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

const filter = (reaction) => {
	return ['👍', '👎'].includes(reaction.emoji.name);
};

const collector = message.createReactionCollector(filter, { time: 7200000 });

collector.on('collect', (reaction, user) => {
	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
	if (reaction.emoji.name === '👍') {
			let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    member.voice.setMute(true);
  }
		} else {
			let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    member.voice.setMute(false);
  }
		}
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});
//	    
}
});

client.login(process.env.token);
