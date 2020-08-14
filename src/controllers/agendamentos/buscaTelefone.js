const connection = require("../../database/connection");

module.exports = {
  async index(req, res) {
    const agendamentos = await connection("agendamentos").select(["*"]).where({
      id: "693e70acfe321b",
    });

    return res.json(agendamentos);
  },
};
