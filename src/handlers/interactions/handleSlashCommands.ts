import { CommandInteraction } from 'discord.js';

async function handleSlashCommand(interaction: CommandInteraction): Promise<any>
{
    const command = interaction.client.commands.get(interaction.commandName);
    if(!command) return;

    try 
    {
        await command.execute(interaction);
    }
    catch(err) 
    {
        console.error(err);
        await interaction.reply({ content: `There was an error while executing this command!`, ephemeral: true });
    }
}

export default handleSlashCommand;
export
{
    handleSlashCommand
};