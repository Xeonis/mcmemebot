const TelegramBot = require('node-telegram-bot-api') 
const log = new (require('../../logger/main.js').Logger)("",true)


async function createClient(settings) {
  try {
    const token = settings.telegram.token;
    const client = new TelegramBot(token, {polling: true});
    log.ok("Telegram bot loaded")
    return client
  } catch (error) {
    log.error("Canno start telegram bot",error);
    throw new Error("TG bot not started")
  }
}





module.exports = {
  createClient,
}


