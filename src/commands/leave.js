module.exports = {
	name: 'leave',
	description: 'Leaves the vc.',
	cooldown: 5,
	execute(message) {
		const {
            channel
        } = message.member.voice;
        if (!channel) return message.channel.send('I\'m sorry but your not in a vc!');
        if (!message.guild.me.voice.channel) return message.channel.send("I'm not in a vc")
        if (channel != message.guild.me.voice.channel) return message.channel.send("We are not in the same vc")
        channel.leave()
        const serverQueue = message.client.queue.get(message.guild.id)
        if (!serverQueue) return message.channel.send("Error")
        serverQueue.songs = []
        message.channel.send("Left vc")
	}
};
