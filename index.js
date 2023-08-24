
const tgWorker  = require("./src/tg/main.js");
const discordWorker  = require("./src/discord/main.js")
const config = require('./config.json') ;

//import * as  https from "https";
//import * as fs from 'fs';
var downloadDir = './images';
let something = ''


void async function () { 

try{
    const discordClient = await discordWorker.createClient(config)
    const tgClient = await tgWorker.createClient(config)

    
    /*
    tgClient.on('message', (msg) => {
        const chatId = msg.chat.id;
        let bot = tgClient
        console.log(msg)
        if (msg.photo?.length > 0) {
            bot.getFileLink(msg.photo.at(-1).file_id).then( async (fileUri) => {
                let time = process.hrtime();
                let extension = fileUri.split('.').pop();
                let newName = `${time[0]}${time[1]}.${extension}`;
                let file = fs.createWriteStream(`${downloadDir}/${newName}`);
                let request = await https.get(fileUri, (response) => {
                   response.pipe(file);
                });
                file.on('finish', () =>{
                    console.log(msg.text = `/images/${newName}`)
                })
            
            });
        }
        bot.sendMessage(chatId, "I get ur message ")
    });
    */

    /**
     * 
        let clientguilds = client.guilds.cache
        clientguilds[0]

        console.log(workGuilds.name)

     */
    let webhook = "https://discord.com/api/webhooks/1143807056034418718/cc5y50hpg5MHF_6SPjj8PcNkSVxq6Dcw80cqAKOoYQL5qrgwVTBlX_giQEnoRhLiIbcd"
    let guild = await discordClient.guilds.fetch({id:"1143457380902903828"})
    let channel = await guild.channels.fetch("1143800359698055268")
    let webhooks = channel.fetchWebhooks()

    discordWorker.ConnectToWebHook(webhook)


       /*   
    tgClient.on('message', (msg) => {
        
        
        const chatId = msg.chat.id;
        tgClient.sendMessage(chatId, "resend!")
    });
    */

    //discordClient.interactionCreate(client)
}catch{

}
}()
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