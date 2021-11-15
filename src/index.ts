import { Client, Collection } from 'discord.js';
import { join } from 'path';
import config from '../config.json';
import handleMessage from './handlers/handleMessages';
import handleInteraction from './handlers/interactions/handleInteractions';
import { loadEvents, loadSlashCommands } from './handlers/loading/loadEC';

// mobilify();
const client: Client = new Client({
    partials: [
        'CHANNEL', 'USER', 'GUILD_MEMBER'
    ],
    intents: [
        'GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INVITES', 'GUILD_BANS', 'GUILD_WEBHOOKS',
        'GUILD_MEMBERS', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES',
    ],
    ws: {
        properties: {
            $browser: 'Discord IOS'
        }
    }
});

client.commands = new Collection();
client.aliases = new Collection();

loadEvents(client, join(__dirname, 'events'));
loadSlashCommands(client.commands, join(__dirname, 'commands'));

client.on('messageCreate', (message) => handleMessage(message));
client.on('interactionCreate', (interaction) => handleInteraction(interaction));

client.login(config.token);