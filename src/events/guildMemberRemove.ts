import { Client, GuildMember, TextChannel } from 'discord.js';

module.exports = (_client: Client, member: GuildMember) =>
{
    if(member.guild.id !== '909003183219687464' || !member.guild.channels.cache.get('909005183877545985')) return;
    
    const channel = member.guild.channels.cache.get('909005183877545985') as TextChannel;
    return channel.send({
        embeds: [
            {
                title: member.user.username.toString() + ' has left the server.',
                description: 'Wow, ' + member.user.username.toString() + ' left, what a fucking bitch.',
                fields: [
                    {
                        name: 'User ID',
                        value: '`' + member.user.id + '`',
                        inline: true
                    },
                    {
                        name: 'User Created At',
                        value: '`' + member.user.createdAt.toString() + '`',
                        inline: true
                    },
                    {
                        name: 'User Joined At',
                        value: '`' + member.joinedAt!.toString() + '`',
                        inline: true
                    }
                ]
            }
        ]
    });
};