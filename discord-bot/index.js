const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('message', message => {
if(message.content.toLowerCase().includes('fan')){
	message.channel.send('fatass!');
}
if(message.content.includes('https://tenor.com/view/dhg-rad-rad-rad-van-fortuyn-gif-19627799')){
	try{
	message.channel.send('fatass!!');
    if (message.mentions.members.first()) {
        try {
        message.mentions.members.first().ban();
	message.channel.send("God has accepted your wish and braden has been banned");
        } catch {
            message.reply("I do not have permissions to ban");
        }
    } else {
        message.reply("You do not have permissions to ban");
    }
	}
	catch(error1){
	console.error(error1);
	}
}
// 	try{
// 		let userid = '339618868072939521';
// // 		    let member =  message.guild.member(userid);
// let member1 = message.guild.members.cache.get("339618868072939521");

		
// member1.ban();
// message.channel.send("God has accepted your wish and braden has been banned");
// 	}
// 	catch(error1){
// 	console.error(error1);
// 	}
// }
	
if(message.content.toLowerCase().includes('f4n')){
	message.channel.send('fatass!');
}
if(message.content.toLowerCase().includes('faan')){
	message.channel.send('fatass!');
}
if(message.content.includes('FAN')){
	message.channel.send('turn off capslock fatass!');
}
	
if(message.content.includes('tenor.com/view/meghanmarkle-gif-19027188')){
	message.channel.send('fatass!');
}
if(message.content.includes('tenor.com/view/dhg-rad-rad-rad-van-fortuyn-gif-19627799')){
	message.channel.send('fatass!');
}
if (message.author.id === "339618868072939521" || message.author.id === "529066881328349185" || message.author.id === "475175184765288478") {
	message.channel.send(`fatass!!`);
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

var iff = true;


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

else if( command === `f3`){
	const link = args.shift().toLowerCase();
	for(var i=0; i<5; i++){
	message.channel.send({
        files: [link]
});
	}
//	message.channel.send(link);	
}
else if( command === `f4`){
	for(var i=0; i<5; i++){
	message.channel.send({
        files: [`https://cdn.discordapp.com/attachments/798422846128521266/798429645552615424/Fem-1.mp4`]
});
	}
}
//	message.channel.send(link);	

	  else if (command === `f5`) {
		  for(var i=0; i<20; i++){
	message.channel.send('yeah fuck you');
		  }
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
	message.channel.send(`Bot started working. React to your message 👍 to mute and 👎 to unmute.`);
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
	  message.reactions.forEach(reaction => reaction.remove('255062830041006080'));
	  message.reactions.forEach(reaction => reaction.remove('467648406722969635'));
  }
		} else {
			let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    member.voice.setMute(false);
	  message.reactions.forEach(reaction => reaction.remove('255062830041006080'));
	  message.reactions.forEach(reaction => reaction.remove('467648406722969635'));
  }
		}
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});
	    
}
});

client.login(process.env.token);
