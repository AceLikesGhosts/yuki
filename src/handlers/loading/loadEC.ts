import { Client, Collection } from 'discord.js';
import { readdir, readdirSync, lstatSync } from 'fs';

function loadEvents(client: Client, directory: string): void
{
    readdir(directory, (err, files) =>
    {
        if(err) console.log(err);
        files.forEach(file =>
        {
            if(file.endsWith('.map')) return;
            if(file.endsWith('.js') || file.endsWith('.ts'))
            {
                const eventHandler = require(`${ directory }/${ file }`);
                const eventName = file.split('.')[0];
                client.on(eventName, (...args) => eventHandler(client, ...args));
                console.log(`Registered Event: ${ eventName }`);
            }
        });
    });
}

function loadSlashCommands(commandCollection: Collection<unknown, any>, directory: string): void
{
    const files = readdirSync(directory);
    for(const file of files)
    {
        const path = `${ directory }/${ file }`;
        if(file.endsWith('.js') || file.endsWith('.ts'))
        {
            const registeredCommand = require(path);
            commandCollection.set(registeredCommand.data.name, registeredCommand);
            console.log(`Registered command ${ registeredCommand.data.name }.`);
        }
        else if(lstatSync(path).isDirectory())
        {
            loadSlashCommands(commandCollection, path);
        }
    }
}

export
{
    loadEvents,
    loadSlashCommands
};