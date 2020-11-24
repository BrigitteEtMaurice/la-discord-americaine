const dotenv = require("dotenv");
const Discord = require("discord.js");

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.content === "!hello") {
    message.channel.send("You suck !");
  }
});

client.login(process.env.CLIENT_TOKEN);
