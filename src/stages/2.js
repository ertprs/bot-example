const opcoes = require("../opcoes1");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = "\n";

  Object.keys(opcoes.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `${value} - ${element.descricao} \n`;
  });

  banco.db[user].stage = 3;

  return [
    menu,
  ];
}

exports.execute = execute;
