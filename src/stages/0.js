const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = "\n";

  Object.keys(opcoes.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `${value} - ${element.descricao} \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá sou a assistente virtual digite a opção abaixo desejada. \n\n`,
    menu,
  ];
}

exports.execute = execute;
