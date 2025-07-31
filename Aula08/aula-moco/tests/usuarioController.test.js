jest.mock('../src/models/usuarioModel', () => ({
  salvarUsuario: jest.fn()
}));

const request = require('supertest');
const app = require('../index');
const usuarioModel = require('../src/models/usuarioModel');

describe('Testes de integração - Usuário POST', () => {
  test('deve cadastrar corretamente o usuário', async () => {
    const userMoco = {
      id: 1,
      nome: 'João',
      senha: '123456'
    };

    usuarioModel.salvarUsuario.mockResolvedValue(userMoco);

    const res = await request(app)
      .post('/usuarios')
      .send({
        nome: 'João',
        senha: '123456'
      });     
    expect(res.status).toBe(201);
    expect(res.body.usuario).toEqual(userMoco);
    expect(usuarioModel.salvarUsuario).toHaveBeenCalledWith({
      nome: 'João',
      senha: '123456'
    });
  });
});




