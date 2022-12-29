const { SlashCommandBuilder } = require("discord.js");
const fedonQouetes = [
  "Hvis alternativet er å lese så tror jeg på deg",
  "Alle vet hvordan bokstaver virker",
  "Du kan ikke få i både pose og skjegg",
  "Alle er ekspert når de dauer",
  "Jeg er hønen i revehuset",
  "Det siste jeg trenger et 10-12kg mannebeist som prøver å spise meg mens jeg såver 😐",
  "Når jeg er pensjonist så har jeg bare planer om å snakke om de gode gammle dagene og lage ekkle lyder med halsen mens jeg klør meg på ballene 😐",
  "Det ansiktsutrykket der beskriver store deler av banrdommen min",
  "Fingrene min har ikke ører, så de hørte deg tydeligvis ikke",
  "Hvordan skal jeg få utvidet innsiktene min her uten at dere ytrer meningen deres!",
  "Bare tanken på all idiotene der ute som enda ikke har byttet til vinterdekk er nok til at jeg tar hjemmekontor i dag",
  "Jeg vet jeg er 6 dager eldre en @jgilje men jeg føler meg yngre 😐",
  "Jeg har en ben å plukke med den påstanden!",
  "Jeg skal faen google og mase her inne til alle feil er fikset!",
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
