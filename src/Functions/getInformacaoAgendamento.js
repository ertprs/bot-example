// iquirino91@gmail.com

const axios = require("axios")
const moment = require("moment");
moment.locale("pt");

let dataAGE;
let NomePaciente;

axios.post('http://localhost:4444/busca/paciente')
.then(( res ) => {
  dataAGE = res.data[0].dt_agenda
  NomePaciente = res.data[0].nm_paciente

  const agendamento = {
    1: {
      descricao: "agendamentos",
      data: moment(dataAGE).format("dddd, DD MMMM  YYYY"),
      hora: moment(dataAGE).format("HH:mm"),
      paciente: NomePaciente
    },
  };
  exports.menu = agendamento;
});
