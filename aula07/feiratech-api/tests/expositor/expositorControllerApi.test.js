

const expositorModel = require('../../src/modules/expositor/models/expositorModel');
const { sequelize } = require('../../src/config/configDb');
const app = require('../../index');
const request = require('supertest');

beforeAll(async () => {
    // criar as tabelas antes de iniciar a switch de testes
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    //encerra a comunicaçao com o banco de dados
    await sequelize.close();
})

afterEach(async () => {
    // limpa a tabela de expositores após cada teste
    await expositor.truncate();
})

//TDD Post Expositores
describe('Testes de integração expositor- endpoint Post/expositor', () => {
    test('POST / Expositor cadastrado com sucesso', async () => {
        const res = await req(app).post('/expositor').send({ nome:"joao", email: "joao@email.com", instituicao: "UFRN" })
        expect(res.status).toBe(201);        
        expect(res.body.expositor).toHaveProperty("nome");
        expect(res.bode.expositor.nome).toBe('joao'); 
        expect(res.body.expositor.email).tobe("email");
        expect(res.body.expositor.instituicao).toBe("URFN");  
        expect(res.body.expositorModel.msg).toBe("Expositor cadastrado com sucesso");  
    }
    test('Deve apresentar mensagem de errro para duplciar email', async () => {
        const res = await req(app).post('/expositor').send({ nome:"joao", email: "joao@email.com", instituicao: "UFRN" })
        const res2 await req (app).post('/expositor').send({nome: "maria, email:"joao@email.com", instituicao: "UFRN" })
        expect(res2.status).toBe(400);
        expect(res2.body.msg).toBe("Email já cadastrado");
    })
    test('Deve apresentar mensagem de erro para campos vazios', async () => {
        const res = await req(app).post('/expositor').send({ nome:"", email: "", instituicao: "" })
        const res2 await req (app).post('/expositor').send({nome: "maria, email:"joao@email.com", instituicao: "UFRN" })
        expect(res2.status).toBe(400);
        expect(res2.body.msg).toBe("Email já cadastrado");     
           
    })
})





//     test('POST /produtos - Deve falhar ao criar um produto sem nome ', async () => {
//         const res = await request(app).post('/produtos').send({ preco: 3.70, estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto sem preço ', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto sem estoque ', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão' });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto sem dados ', async () => {
//         const res = await request(app).post('/produtos').send({});
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com preço negativo ', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', preco: -5.50, estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com estoque negativo ', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', preco: 5.50, estoque: -30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com nome diferente de String', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 8, preco: 5.50, estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com preço diferente de number', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', preco: '5.50', estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com estoque diferente de number', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', preco: 0, estoque: 30 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })
//     test('POST /produtos - Deve falhar ao criar um produto com estoque igual a 0', async () => {
//         const res = await request(app).post('/produtos').send({ nome: 'Feijão', preco: 5.50, estoque: 0 });
//         expect(res.status).toBe(400);
//         expect(res.body.msg).toBe('Dados inválidos!');
//     })

// })

// //TDD Listar Produtos
// describe('Testes de integração - Produto Listar', () => {
//     //verificar se a rota está funcionando - status 200
//     test('Deve retornar um Array vazio quando não tem produtos no banco', async () => {
//         const res = await request(app).get('/produtos')
//         expect(Array.isArray(res.body)).toBeTruthy();
//         expect(res.body.length).toBe(0);
//     });
//     test('Deve retornar a lista dos produtos', async () => {
//         await request(app).post('/produtos').send({ nome: 'Feijão', preco: 10, estoque: 30 });
//         const res = await request(app).get('/produtos');
//         expect(Array.isArray(res.body)).toBeTruthy();
//         expect(res.body.length).toBeGreaterThan(0);
//         expect(res.body[0]).toHaveProperty('nome');
//         expect(res.body[0].nome).toBe('Feijão');

//     })
// })

// //FALTA CONSTRUIR OS DESCRIBES E TESTES PARA O PUT, DELETE, BUSCAR