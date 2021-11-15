import { Message } from 'discord.js';
import { data } from '../util/constants';

const regex: RegExp = /^No harassment, abuse, or bullying\.$/i;

function handleMessages(message: Message): any
{
    if(message.channel.id === '909004897448517672' && message.author.id !== message.client.user!.id)
    {
        const tMessage: string = message.content;
        message.delete();

        if(regex.test(tMessage.toString()))
        {
            console.log('assigning role');
            message.member?.roles.add('909020673362522142');
            return message.channel.send('`' + message.member?.displayName.toString() + '` has verified.')
                .then(m => setTimeout(() => m.delete(), 5000));
        }
        else
        {
            return message.channel.send('You did not enter the proper text, please try again.')
                .then(m => setTimeout(() => m.delete(), 5000));
        }
    }

    if(message.author.id === '327639826075484162')
    {
        if(message.content.toString() === '.d g')
            return message.guild?.commands.set(data as any);
    }

    return;
}

export default handleMessages;
export
{
    handleMessages
};