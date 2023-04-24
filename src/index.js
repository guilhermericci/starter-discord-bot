const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const TOKEN = process.env.TOKEN

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
    console.log(interaction)
})

client.login(TOKEN).then(() => {
    setInterval(() => {
        console.log('ping')
    }, 60000)
})
