const { SlashCommandBuilder } = require("discord.js");
require("dotenv").config();
module.exports = {
  data: new SlashCommandBuilder()
    .setName("tudologi")
    .setDescription("Replies a random tudologi!"),
  async execute(interaction) {
    const request = await fetch(`${process.env.apiUrl}/api/tudologi`);
    const fedon = await request.json();
    await interaction.reply(fedon.quote);
  },
};
