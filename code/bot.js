require('dotenv').config(); // Đảm bảo bạn đã cài đặt gói 'dotenv'

const { Client, GatewayIntentBits } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const ownerId = process.env.OWNER_ID;
const prefix = 'matloi!';  // Đây là prefix, bạn có thể tùy chỉnh thoải mái.

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(`Received message: ${message.content} from ${message.author.tag}`);
    
    // Kiểm tra xem tin nhắn có phải từ bot hoặc không bắt đầu bằng prefix không
    if (!message.author.bot && message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        console.log(`Command: ${command}, Args: ${args}`);

        // Xử lý các lệnh...
        if (command === 'author') {
            message.channel.send(`Owner của bot là: <@${ownerId}>`);
        } else if (command === 'hello') {
            message.channel.send(`Hello ${message.author}!`);
        }
        // Thêm các lệnh khác ở đây...
    }
});


client.login(token);