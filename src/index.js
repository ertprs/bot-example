const express = require("express");
const bodyParser = require("body-parser");
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");
const cron = require('node-cron');
const app = express();

app.use(bodyParser.json({ limit: "100mb" }));


  bot.create().then((client) => start(client));
  function start(client) {
    client.onMessage((message) => {
      let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.sender.name
      );
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from, element);
      }
    });
  }

  function getStage(user) {
    if (banco.db[user]) {
      return banco.db[user].stage;
    } else {      
      banco.db[user] = {
        stage: 0,
        itens: [],
      };
      return banco.db[user].stage;
    }
  }

console.log('Server On!')

app.use(require("./controllers/agendamentos/routes"));

app.listen(process.env.PORT || 4444);