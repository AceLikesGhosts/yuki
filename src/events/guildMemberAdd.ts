import { Client, GuildMember, TextChannel } from 'discord.js';

module.exports = (_client: Client, member: GuildMember) =>
{
    if(member.guild.id !== '909003183219687464' || !member.guild.channels.cache.get('909005147932344351')) return;

    const welcomeChannel: TextChannel = member.guild.channels.cache.get('909005147932344351') as TextChannel;

    return welcomeChannel.send({
        embeds: [
            {
                title: member.user.username.toString() + ' has joined the server!',
                description: 'Welcome to the server, ' + member.user.username.toString() + '!\nTo verify your account, please visit the <#909004897448517672> channel, and follow the instructions listed there. If you require assistance with this, please contact a staff member.',
                fields: [
                    {
                        name: 'Join Date',
                        value: '`' + member.joinedAt!.toString() + '`',
                        inline: true
                    },
                    {
                        name: 'Account Creation Date',
                        value: '`' + member.user.createdAt.toString() + '`',
                        inline: true
                    }
                ],
            }
        ]
    });
};