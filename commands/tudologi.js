const { SlashCommandBuilder } = require("discord.js");
const tudologi = [
  "Tuden er åpen for alle",
  "Det er bedre å smøre tuden en gang for mye enn en gang for lite",
  "Det skal ikke være lys i enden av tuden",
  "Kabel skal alltid ut, ikke inn",
  "Verden kan ta slutt når som helst - eat accordingly",
  "Alltid få betalt for å drite",
];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("tudologi")
    .setDescription("Replies a random tudologi!"),
  async execute(interaction) {
    await interaction.reply(
      tudologi[Math.floor(Math.random() * tudologi.length)]
    );
  },
};
