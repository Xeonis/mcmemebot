import { REST, Routes } from 'discord.js';
import { Client, GatewayIntentBits } from 'discord.js';



async function createClient(settings) {
    try {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        await client.login(settings.discord.token);

        let clientguilds = client.guilds.cache
        clientguilds[0]

        console.log(workGuilds.name)

        return client
    } catch (error) {
        console.log("Canno start Discord bot");
        console.error(error);
    }
    
}

/**
 * 
 * @param {Client} client 
 */
function interactionCreate (client) { 
    client.on ('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
    
        if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
        }
    });
}





async function registerComands () {
    const commands = [
        {
          name: 'ping',
          description: 'Replies with Pong!',
        },
    ];

    const rest = new REST({ version: '10' }).setToken(settings.discord.token);

    try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("471432976303915009"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
}








export default {
    createClient,
    interactionCreate
}
