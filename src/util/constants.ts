import { SlashCommandBuilder } from '@discordjs/builders';

const data = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Sends back the Websocket heartbeat, and roundabout time.'),
].map(command => command.toJSON())

export
{
    data
};