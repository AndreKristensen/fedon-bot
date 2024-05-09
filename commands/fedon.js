const { SlashCommandBuilder } = require("discord.js");

require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fedon")
    .setDescription("Replies a random fedon qoute!"),
  async execute(interaction) {
    const request = await fetch(`${process.env.apiUrl}/api/fedon`);
    const fedon = await request.json();
    await interaction.reply(fedon.quote);
  },
};
