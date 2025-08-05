

const { sequelize } = require('../config/configDB');
const  LivroModel = require('../Models/livroModel');
const app = require('../../index');
const req = require('supertest');


class LivroController {
    static async criar(req, res) {

      // Verifica se a conexão com o banco de dados está ativa

      // teste
      try {
        const { titulo, autor, ano_publicacao, genero, preco } = req.body;
  
        if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
          return res.status(400).json({ msg: "Campos obrigatórios ausentes." });
        }
  
        const item = await LivroModel.create({
          titulo,
          autor,
          ano_publicacao,
          genero,
          preco
        });
  
        return res.status(201).json({
          id: item.id,
          titulo: item.titulo,
          msg: 'Livro criado com sucesso'
        });
      } catch (error) {
        console.error('❌ ERRO AO CRIAR LIVRO:', error); // 👈 adicione isto
        return res.status(500).json({ msg: "Erro ao criar livro", error: error.message });
      }
    }
  }
  


//   // Método para listar todos os livros
//   static async listarTodos(req, res) {
//     try {
//       // Busca todos os registros da tabela Estoque
//       const itens = await Estoque.findAll();

//       // Retorna os itens com status 200
//       res.status(200).json(itens);

//     } catch (error) {
//       // Loga erro e retorna status 500
//       console.error("Erro listar itens:", error);
//       res.status(500).json({ msg: "Erro ao listar", erro: error.message });
//     }
//   }

//   // Método para buscar um item específico pelo ID
//   static async listarPorId(req, res) {
//     try {
//       // Extrai o ID dos parâmetros da URL
//       const { id } = req.params;

//       // Busca o item pelo ID na tabela Estoque
//       const item = await Estoque.findByPk(id);

//       // Se não encontrado, retorna erro 404
//       if (!item) {
//         return res.status(404).json({ msg: "Item não encontrado" });
//       }

//       // Retorna o item encontrado
//       res.status(200).json(item);

//     } catch (error) {
//       // Loga erro e retorna erro 500
//       console.error("Erro buscar item:", error);
//       res.status(500).json({ msg: "Erro ao buscar item", erro: error.message });
//     }
//   }

//   // Método para atualizar os dados de um item pelo ID
//   static async atualizar(req, res) {
//     try {
//       // Extrai o ID dos parâmetros e os novos dados do corpo da requisição
//       const { id } = req.params;
//       const { nome, marca, categoria, quantidade, preco_unitario } = req.body;

//       // Verifica se pelo menos um campo foi enviado para atualização
//       if (!nome && !marca && !categoria && !quantidade && !preco_unitario) {
//         // Se nenhum campo para atualizar, retorna erro 400
//         return res.status(400).json({ msg: "Nenhum campo para atualizar foi enviado." });
//       }

//       // Atualiza o item no banco, usando os dados enviados
//       // O método update retorna um array, onde o primeiro elemento é a quantidade de linhas afetadas
//       const [linhasAfetadas] = await Estoque.update(req.body, { where: { id } });

//       // Se nenhuma linha foi afetada, significa que o item não foi encontrado ou os dados não mudaram
//       if (linhasAfetadas === 0) {
//         return res.status(404).json({ msg: "Item não encontrado ou dados inalterados" });
//       }

//       // Opcional: busca o item atualizado para enviar na resposta
//       const itemAtualizado = await Estoque.findByPk(id);

//       // Retorna sucesso e o item atualizado
//       res.status(200).json({ msg: "Item atualizado com sucesso", item: itemAtualizado });

//     } catch (error) {
//       // Loga erro e retorna erro 500
//       console.error("Erro atualizar item:", error);
//       res.status(500).json({ msg: "Erro ao atualizar", erro: error.message });
//     }
//   }

//   // Método para deletar um item pelo ID
//   static async deletar(req, res) {
//     try {
//       // Extrai o ID dos parâmetros da URL
//       const { id } = req.params;

//       // Tenta deletar o item com o ID informado
//       const deletado = await Estoque.destroy({ where: { id } });

//       // Se nenhum registro foi deletado, item não foi encontrado
//       if (!deletado) {
//         return res.status(404).json({ msg: "Item não encontrado" });
//       }

//       // Retorna mensagem de sucesso
//       res.status(200).json({ msg: "Item excluído com sucesso" });

//     } catch (error) {
//       // Loga erro e retorna erro 500
//       console.error("Erro excluir item:", error);
//       res.status(500).json({ msg: "Erro ao excluir", erro: error.message });
//     }
//   }
// }

// // Exporta o controller para ser usado nas rotas do sistema
module.exports = LivroController;
