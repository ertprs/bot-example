const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!opcoes.menu[msg]) {
    banco.db[user].stage = 0;
    return [
      "❌ - Código inválido digite uma das opções enviadas anteriormente."
      //"```Digite # para finalizar ou * para cancelar```",
    ];
  }

  if(msg === "1") {
    banco.db[user].stage = 0;
    return [
      "📞 11 0000000-00000",
    ];
  }

  if(msg === "2") {
    banco.db[user].stage = 0;
    return [
      "📞 11 0000000-00000",
    ];
  }

  if(msg === "3") {
    banco.db[user].stage = 0;
    return [
      "📞 11 0000000-00000",
    ];
  }
}

exports.execute = execute;
