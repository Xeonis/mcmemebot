import discordWorker from "./src/discord/main.js";
import tgWorker from "./src/tg/main.js";

import settings from './config.js';

try{

    const discordClient = await discordWorker.createClient(settings)
    const tgClient = await tgWorker.createClient(settings)



    discordClient.interactionCreate(client)
}catch{

}

/*

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

*/