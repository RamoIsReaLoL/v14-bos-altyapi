const { Discord } = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Botun Pingine Bakarsınız',
    type: 1,
    options: [],
    run: async (client, interaction) => {
      await interaction.channel.send(`${client.ws.ping} ms`)
 }
};
