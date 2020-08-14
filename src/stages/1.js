const opcoes = require("../opcoes");
const opcoes1 = require("../opcoes1");
const opcoesExames = require("../opcoesExames");
const banco = require("../banco");
const axios = require("axios");

const GetInformacoesAgendamento = require("../Functions/getInformacaoAgendamento");

function execute(user, msg) {
  if (msg === "*") {
    let menu = "\n";
    Object.keys(opcoes.menu).forEach((value) => {
      let element = opcoes.menu[value];
      menu += `${value} - ${element.descricao} \n`;
    });

    banco.db[user].stage = 1;
    return menu;
  }

  if (!opcoes.menu[msg]) {
    banco.db[user].stage = 1;
    return [
      "❌ - Opção inválida *digite apenas o número* das opções enviadas anteriormente.",
    ];
  }

  if (msg === "1") {
    banco.db[user].stage = 0;
    return [
      "opcao1",
      "\n\n◀️ - Para voltar envie: *#*",
    ];
  }

  if (msg === "2") {
    banco.db[user].stage = 0;
    return [
      "🕑 Você selecionou a opção para remarcar a consulta/exame.",
      "\n\n◀️ - Para voltar envie: *#*",
    ];
  }

  if (msg === "3") {
    banco.db[user].stage = 0;
    return [
      "❌ Você selecionou a opção para cancelar a consulta/exame.",
      "\n\n◀️ - Para voltar envie: *#*",
    ];
  }

  if (msg === "4") {
    banco.db[user].stage = 0;
    return [
      "Rua Teste",
      "\n\n◀️ - Para voltar envie: *#*",
    ];
  }
  if (msg === "5") {
    // iquirino91@gmail.com
    banco.db[user].stage = 0;

    let menu = "\n";
    let hora = "\n"
    let nome_paciente = ""

    Object.keys(GetInformacoesAgendamento.menu).forEach((value) => {
      let element = GetInformacoesAgendamento.menu[value];
      menu += `🕑 ${element.data} \n`;
      hora += `⏳ ${element.hora} \n`;
      nome_paciente += `${element.paciente}`;
    });

    return [
      `Olá ${nome_paciente}, sua próxima consulta/exame será no dia:`,
      menu,
      hora
    ];
  }

  if (msg === "9") {
    let menu = "\n";

    Object.keys(opcoes1.menu).forEach((value) => {
      let element = opcoes1.menu[value];
      menu += `${value} - ${element.descricao} \n`;
    });

    banco.db[user].stage = 3;
    return [menu];
  }
}

exports.execute = execute;
