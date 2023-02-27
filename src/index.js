require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

// Affiche un message dans le terminal quand le bot est bien en ligne.
client.on('ready', (c)=> {
    console.log(`✅ ${c.user.tag} is online.`)
});

let headset = false;

client.on('interactionCreate', (interraction)=> {
    if(!interraction.isChatInputCommand()) return;

    if(interraction.commandName === 'headset') {
        if (!headset) {
            interraction.member.roles.add(['1079837778440896653'], `${interraction.user.username} a mis ses écouteurs.`);
            interraction.reply({content: '📢 J\'indique aux autres que tu as mis tes écouteurs ! ', ephemeral: true})
            console.log(interraction);
            headset = true;
        } else {
            interraction.member.roles.remove(['1079837778440896653'], `${interraction.user.username} a retiré ses écouteurs.`);
            interraction.reply({content: '📢 J\'indique aux autres que tu as retiré tes écouteurs !', ephemeral: true});
            headset = false;
        }
    }
});

client.login(process.env.TOKEN);