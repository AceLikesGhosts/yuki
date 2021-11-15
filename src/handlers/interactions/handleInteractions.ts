import { Interaction } from 'discord.js';
import { handleSlashCommand } from './handleSlashCommands'
import { handleButton } from './handleButtons'

function handleInteraction(interaction: Interaction)
{
    if (interaction.isCommand()) return handleSlashCommand(interaction);
    if (interaction.isButton()) return handleButton(interaction);

    throw new Error('Cannot handle interaction which is not a (/) command or button.')
}

export default handleInteraction;
export {
    handleInteraction
}