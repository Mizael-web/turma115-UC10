
const LivroModel = require('../models/livroModel');

// Listar todos os livros
const listarLivros = async (req, res) => {
  try {
    const livros = await LivroModel.findAll();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar os livros', detalhes: error.message });
  }
};

// Buscar livro por ID
const buscarLivroPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const livro = await LivroModel.findByPk(id);

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar o livro', detalhes: error.message });
  }
};

// Criar novo livro
const criarLivro = async (req, res) => {
  const { titulo, autor } = req.body;

  // Validação
  if (!titulo || !autor) {
    return res.status(400).json({ erro: 'Título e autor são obrigatórios.' });
  }

  try {
    const novoLivro = await LivroModel.create({ titulo, autor });
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar o livro', detalhes: error.message });
  }
};

// Atualizar livro por ID
const atualizarLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor } = req.body;

  // Validação
  if (!titulo || !autor) {
    return res.status(400).json({ erro: 'Título e autor são obrigatórios para atualização.' });
  }

  try {
    const livro = await LivroModel.findByPk(id);

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    await livro.save();

    res.status(200).json({ mensagem: 'Livro atualizado com sucesso', livro });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar o livro', detalhes: error.message });
  }
};

// Excluir livro por ID
const excluirLivro = async (req, res) => {
  const { id } = req.params;

  try {
    const livro = await LivroModel.findByPk(id);

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    await livro.destroy();
    res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir o livro', detalhes: error.message });
  }
};

module.exports = {
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  excluirLivro,
};
