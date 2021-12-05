const Discord = require('discord.js');

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.login(config.token);

client.on('ready', () => console.log('Bánh mì nóng hổi ra lò!'));

client.on('messageCreate', gotMessage);


//console chatter
let y = process.openStdin();
y.addListener("data", res => {
	let x = res.toString().trim().split(/ +/g);
	client.channels.cache.get(config.chatterChannel).send(x.join(" "));
})

const replies = [
	'rộp rộp',
	'giòn giòn',
	'mịn mịn',
	'nhiều chả',
	'ít chả',
	'ít paté',
	'không paté',
	'nhiều paté',
	'nhiều rau',
	'nướng muối ớt',
	'xì dầu',
	'chấm sữa',
	'bơ đường',
	'nhiều chà bông',
	'xíu mại',
	'không',
	'thổ nhĩ kỳ!'
]

function gotMessage(msg) {
	const r = Math.floor(Math.random()*replies.length);
	if (msg.content.toLowerCase() == 'bánh mì') {
		msg.reply(replies[r]);
	}
	if (msg.content.toLowerCase() == 'gà' || msg.content.toLowerCase() == 'gkà') {
		msg.reply(msg.author + "gà");
	}
	if (msg.content.toLowerCase() == 'ping') {
		msg.reply('pong');
	}
}

