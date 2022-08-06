const { InteractionType } = require("discord.js")

module.exports = (client, interaction) => {

    if (interaction.type !== InteractionType.ApplicationCommand) return;
    const command = client.commands.get(interaction.commandName);
  
    command.run(client, interaction);
};