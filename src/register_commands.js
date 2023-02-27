require('dotenv').config();
const { REST, Routes } = require('discord.js')

const commands = [{
    name: 'headset',
    description: 'Vous déplace dans le rôle 🎧Écouteurs. Si vous êtes déjà dans ce rôle, vous en retire.'
}]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering Slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands were registered successfully!');
    } catch (err) {
        console.error('There was an error : ' + err)
    }
})()