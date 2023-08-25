const REST  = require('discord.js').REST
const Routes  = require('discord.js').Routes
const Client  = require('discord.js').Client
const GatewayIntentBits  = require('discord.js').GatewayIntentBits
const WebhookClient  = require('discord.js').WebhookClient
const Content = require('./content.js')

const log = new (require('../../logger/main.js').Logger)("",true)
async function createClient(settings) {
    try {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    
        client.on('ready', () => {
            log.ok(`Logged in as ${client.user.tag}!`);
        });

        await client.login(settings.discord.token);
        return client
    } catch (error) {
        log.error("Canno start Discord bot",error);
        throw new Error("Canno crearte dis client")
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

/**
 * 
 * @param {Client} client 
 */
async function CreateWebHook (client,idserver,idchannel,name,urlImage) {
    try {
        let channel = await (await client.guilds.fetch(idserver)).channels.fetch(idchannel)
        channel.createWebhook({
            name: 'bla-bla' | name,
            avatar: 'https://i.imgur.com/AfFp7pu.png' | urlImage,
        })
            .then(webhook => console.log(`Created webhook ${webhook}`))
            .catch(console.error);
    } catch (error) {
        throw new Error("Canno open webhook")
    }
} 




async function ConnectToWebHook (webhookURL,content) {
    try {

        const webhookClient = new WebhookClient({ url: webhookURL });
        webhookClient.send({
            content: 'Webhook test',
            username: 'some-username',
            avatarURL: 'https://i.imgur.com/AfFp7pu.png',
        });
    } catch (error) {
        throw new Error("Canno open webhook")
    }
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






module.exports = {
    createClient,
    interactionCreate,
    CreateWebHook,
    ConnectToWebHook
}

