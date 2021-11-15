import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Sends back the Websocket heartbeat, and roundabout time.'),
    async execute(interaction: CommandInteraction)
    {
        return await interaction.reply('Pong!');
    },
};