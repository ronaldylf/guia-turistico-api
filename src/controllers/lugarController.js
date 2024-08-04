const database = require("../models");

class LugarController {
    static async adicionarLugar(req, res) {
        try {
            const newUser = await database.Lugar.create(req.body);
            return res.status(201).json({ mensagem: "Lugar criado com sucesso" });
        } catch(erro) {
            return res.status(500).json({ mensagem: `Algo deu errado: ${erro.message}` })
        }
    }

    static async pegarLugares(req, res) {
        try {
          const listaDeLugares = await database.Lugar.findAll();
          return res.status(200).json(listaDeLugares);
        } catch (erro) {
            return res.status(500).json({ mensagem: `Algo deu errado: ${erro.message}` })
        }
      }

    static async pegaLugarPorId(req, res) {
        const id = req.params.id;
        try {
            const lugarEncontrado = await database.Lugar.findByPk(id);
            return res.status(200).json(lugarEncontrado);
        } catch (erro) {
            return res.status(500).json({ mensagem: `Algo deu errado: ${erro.message}` })
        }
    }
      static async atualizaLugar(req, res) {
        const id = req.params.id;
        const dadosAtualizados = req.body;
        const listadeLugaresAtualizados = await database.Lugar.update
        (dadosAtualizados, {
            where: { id: id }
        });
    
        if (listadeLugaresAtualizados[0] === 0) {
            return res.status(400).json({ mensagem: 'Lugar não foi atualizado' });
        }
        return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      }

      static async excluiLugar(req, res) {
        const id = req.params.id;
        const foiInserido = await database.Lugar.destroy({ where: { id: id } });
        if (!foiInserido) {
            return res.status(400).json({ mensagem: 'Lugar não foi excluido' });
        }
        return res.status(200).json({ mensagem: 'Excluido com sucesso' });
      }
}

module.exports = LugarController;
