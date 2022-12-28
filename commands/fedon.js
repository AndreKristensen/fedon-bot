const { SlashCommandBuilder } = require("discord.js");
const fedonQouetes = [
  "Hvis alternativet er å lese så tror jeg på deg",
  "Alle vet hvordan bokstaver virker",
  "Du kan ikke få i både pose og skjegg",
  "Alle er ekspert når de dauer",
  "Jeg er hønen i revehuset",
];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("fedon")
    .setDescription("Replies a random fedon qoute!"),
  async execute(interaction) {
    await interaction.reply(
      fedonQouetes[Math.floor(Math.random() * fedonQouetes.length)]
    );
  },
};
