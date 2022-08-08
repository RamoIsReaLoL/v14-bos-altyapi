const { ApplicationCommandType } = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Botun Pingine Bakarsınız',
    type: ApplicationCommandType.CHAT_INPUT,
    options: [],
    run: async (client, interaction) => {
       interaction.channel.send(`${client.ws.ping} ms`)
 }
};
