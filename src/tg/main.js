const TelegramBot = require('node-telegram-bot-api') 

async function createClient(settings) {
  try {
    const token = settings.telegram.token;
    const client = new TelegramBot(token, {polling: true});
    return client
  } catch (error) {
    console.log("Canno start telegram bot bot");
    console.error(error);
    throw new Error("TG bot not started")
  }
}





module.exports = {
  createClient,
}


