import { Client } from 'discord.js';

module.exports = (client: Client) => 
{
    client.guilds.cache.forEach(guild =>
        {
            guild.channels.fetch();
        })
    client.user?.setActivity('over heaven!', { type: 'WATCHING' });

    console.log(`Logged in as ${ client.user?.tag }`);
    console.log(`The bot SHOULD be up! :D`);
}