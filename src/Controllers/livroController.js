const LivroModel = require('../Models/livroModel');

exports.createLivro = async (req, res) => {
  try {
    const { titulo, autor, ano_publicacao, genero, preco } = req.body;

    // Validate required fields
    if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
      return res.status(400).json({ msg: 'Todos os campos são obrigatórios' });
    }

    // Create a new book
    const livro = await LivroModel.create({ titulo, autor, ano_publicacao, genero, preco });
    return res.status(201).json({ id: livro.id, titulo: livro.titulo, msg: 'Livro criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar livro:', error); // Log the error for debugging
    return res.status(500).json({ msg: 'Erro interno no servidor' });
  }
};
