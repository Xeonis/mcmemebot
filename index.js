/*
import { REST, Routes } from 'discord.js';

*/
import settings from './settings.js';
/*
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];


import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(settings.discord.token);
  

const rest = new REST({ version: '10' }).setToken(settings.discord.token);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("471432976303915009"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
*/

/*

import TelegramBot from 'node-telegram-bot-api'


// replace the value below with the Telegram token you receive from @BotFather
const token = settings.telegram.token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Received your message');
  console.log(msg)
  bot.sendMessage(chatId, "I get ur message"+ msg.text)
});

*/


import { VK, MessageContext } from 'vk-io';

import { HearManager } from '@vk-io/hear';

const vk = new VK({
	token: settings.vk.token
});

const hearManager = new HearManager();

vk.updates.on('message_new', hearManager.middleware);

hearManager.hear(/^hello$/, async (context) => {
    await context.send('Hello!');
});

vk.updates.start().catch(console.error);

