jest.mock('../src/models/usuarioModel', () => ({
  salvarUsuario: jest.fn(),
  listarUsuarios: jest.fn()
}));


const request = require('supertest');
const app = require('../index');
const usuarioModel = require('../src/models/usuarioModel');

describe('Testes de integração - Usuário POST', () => {
  test('deve cadastrar corretamente o usuário', async () => {
   const userMock = {
     id: 1,
     nome: 'João',
     senha: '123456'
   };
  
   usuarioModel.salvarUsuario.mockResolvedValue(userMock);
  
   const res = await request(app)
     .post('/usuarios')
     .send({
       nome: 'João',
       senha: '123456'
     });
  
   expect(res.status).toBe(201);
   expect(res.body.usuario).toEqual(userMock);
   expect(usuarioModel.salvarUsuario).toHaveBeenCalledWith({
     nome: 'João',
     senha: '123456'
   });
  });
  });

  describe('Testes de integração - Usuário GET', () => {
    test('deve retornar uma lista de usuários', async () => {
      const usersMock = [
        { id: 1, nome: 'João', senha: '123456' },
        { id: 2, nome: 'Maria', senha: 'abcdef' }
      ];
  
      usuarioModel.listarUsuarios.mockResolvedValue(usersMock);
  
      const res = await request(app).get('/usuarios');
  
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(1);
      expect(usuarioModel.listarUsuarios).toHaveBeenCalled();
    });
  });