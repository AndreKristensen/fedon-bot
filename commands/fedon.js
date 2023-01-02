const { SlashCommandBuilder } = require("discord.js");
const fedonQoutes = [
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
  "back-crack and sack wax",
  "Det er som å kjøre bil med begge hendene knyttet til nøttene",
  "Kalenderen min ser skremmende tom ut",
  "Du kan ikke komme her med de gode forslagene dine og forvente at jeg forstår dem",
  "Kan du si det en gang til, jeg fulgte ikke med.",
  "Hvis alternativet er å lese så tror jeg på deg",
  "Snakk for dere selv, jeg har stålkontroll på de lemurene",
  "Jeg er for alt som skjer etter jeg har dødd",
  "Hvis det er viktig tar det mer enn to uker",
  "Jeg hater å si det men jeg er enig med Steffen",
  "Alle vet hvordan bokstaver virker",
  "Du sitter jo bare der i sofaen uten å bevege deg, det er det nærmeste du kommer å være død. (om å se på film)",
  "Vi er jo et av de mest ydmyke teamene i hele Altibox",
  "Nå har han vært på Facebook igjen",
  "Jeg skjønte ingenting av hva du presenterte men jeg antar at det var bra.",
  "Vi er så fremoverlente at vi kan grabbe anklene våre så tuten blir helt tilgjengelig",
  "Slutt å være så snill og menneskelig, er det ikke lov å ha noen fiender?",
  "I fare for å høres ut som meg selv...",
  "Ikke for å være vanskeligere enn jeg vanligvis er...",
  "Det gikk fortere en forventet! Eller jeg gjorde ikke en spesielt god jobb, en av de to tingene",
  "Jeg kan multitaske så det kviner, men jeg kan ikke si noe om kvaliteten",
  "Hvor vanskelig kan det bli? Det fikser vi lett neste uke",
  "Jeg er hønen i revehuset",
  "SFO er som en konsentrasjonsleir for unger",
  "Hvis du ikke vil bli skitten på hendene ikke grav i gjørme",
  "Du kan ikke få i både pose og skjegg",
  "men jeg vil ikke ta ansvar for min egen oppførsel i dag så da blir det din feil",
  "er ikke Jonas flertall av Jone?",
  "Hva forventer man når man fyller et møte med løsningsorienterte mennesker!",
];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("fedon")
    .setDescription("Replies a random fedon qoute!"),
  async execute(interaction) {
    await interaction.reply(
      fedonQoutes[Math.floor(Math.random() * fedonQoutes.length)]
    );
  },
};
