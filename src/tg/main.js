import TelegramBot from 'node-telegram-bot-api'


async function 

const token = settings.telegram.token;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log(msg)
  bot.sendMessage(chatId, "I get ur message"+ msg.text)
});
