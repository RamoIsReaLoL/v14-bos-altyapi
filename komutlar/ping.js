const { ApplicationCommandType } = require("discord.js");
module.exports = {
    description: 'Botun Pingine Bakarsınız',
    type: ApplicationCommandType.CHAT_INPUT,
    options: [],
    run: async (client, interaction) => {
       interaction.reply({ content: "Lütfen Bekleyin..." })
       interaction.channel.send(`${client.ws.ping} ms`)
 }
};
