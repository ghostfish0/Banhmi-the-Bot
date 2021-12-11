const Discord = require('discord.js');
const { inlineCode, codeBlock } = require('@discordjs/builders');

const config = require("./Data/config.json");
const asciis = require("./Data/asciis.json");
const pings = require("./Data/pings.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });


client.login(config.token);

client.on('ready', () => {
	console.log('Bánh mì đã ra lò!')
});

client.on('messageCreate', gotMessage);


//console chatter
let y = process.openStdin();
y.addListener("data", res => {
	let x = res.toString().trim().split(/ +/g);
	client.channels.cache.get(config.chatterChannel).send(x.join(" "));
})


async function gotMessage(msg) {
	if (msg.author.bot) return;

	const rdes = Math.floor(Math.random()*pings.repliesDescription.length);
	if (msg.content.toLowerCase() == 'bánh mì') {
		msg.reply(pings.repliesDescription[rdes]);
	}
	if (msg.content.toLowerCase() == 'gà' || msg.content.toLowerCase() == 'gkà') {
		msg.reply(`${msg.author} gà 🐔`);
	}
	if (msg.content.toLowerCase() == 'ping') {
		msg.reply(pings.pings[Math.floor(Math.random()*pings.pings.length)]);
	}

	let spelledWrongly = false;
	if (msg.content.toLowerCase().includes('sài') && !(msg.content.toLowerCase().includes('sài gòn'))) {
		msg.reply('xài*');
	}
	if (msg.content.toLowerCase().includes('xài gòn')) {
		msg.reply('sài*');
	}

	const rasciis = Math.floor(Math.random()*asciis.pics.length);
	if (msg.content.toLowerCase().startsWith('alo ascii')) {
		msg.reply(codeBlock(asciis.pics[rasciis]));
	}
}