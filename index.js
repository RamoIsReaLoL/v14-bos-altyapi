const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: 851 });
const config = require("./config.json");

const synchronizeSlashCommands = require("discord-sync-commands");

const { token } = require("./config.json");
client.commands = new Collection();
fs.readdir("./komutlar/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./komutlar/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, {
      name: commandName,
      ...props,
    });
    console.log(`Komut Yüklendi: ${commandName}`);
  });
  synchronizeSlashCommands(
    client,
    client.commands.map((c) => ({
      name: c.name,
      description: c.description,
      options: c.options,
      type: c.type,
    })),
    {
      debug: true,
    }
  );
});

fs.readdir("./events/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Event yüklendi: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.login(config.token);
