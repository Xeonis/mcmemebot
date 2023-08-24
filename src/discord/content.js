let EmbedBuilder = require('discord.js').EmbedBuilder




class Content {
    constructor () {

    }
    get() {
        return ""
    }

}


class WebhookContent extends Content {
    constructor () {
        super()
    }
    setEmbed () {
        const embed = new EmbedBuilder()
        .setTitle('Some Title')
        .setColor(0x00FFFF);
        webhookClient.send({
            content: 'Webhook test',
            username: 'some-username',
            avatarURL: 'https://i.imgur.com/AfFp7pu.png',
            embeds: [embed],
        });
    }

    get () {
       return {
            content: 'Webhook test',
            username: 'some-username',
            avatarURL: 'https://i.imgur.com/AfFp7pu.png',
            embeds: [embed],
        };
    }
}