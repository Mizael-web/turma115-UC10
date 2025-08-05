
# Atividade Prática – Desenvolvimento de API com Testes Unitários (TDD)

## Objetivo

Nesta atividade, você deverá desenvolver uma API REST completa com base em um conjunto de testes unitários previamente fornecido. O foco principal é praticar o **Desenvolvimento Guiado por Testes (TDD)** utilizando **Node.js**, **Express**, **Sequelize** e **PostgreSQL**.

## Instruções

1. **Leia atentamente o arquivo de testes fornecido (`livroController.test.js`)**.
   - Este arquivo contém todos os testes unitários necessários para validar sua implementação.
   - Os testes foram escritos utilizando **Jest** e **Supertest**.

2. **Implemente uma API completa para a entidade `Livro`**, contendo:
   - Criação de livros
   - Listagem de todos os livros
   - Busca por título (parcial ou completo)
   - Atualização de livros
   - Remoção de livros

3. **Utilize Sequelize para mapear a entidade `Livro`** no banco de dados PostgreSQL com os seguintes campos:
   - `id` (chave primária)
   - `titulo` 
   - `autor` 
   - `ano_publicacao` 
   - `genero`
   - `preco`

4. **Execute os testes frequentemente durante o desenvolvimento**.
   - Utilize o comando `npx jest livroController.test.js` para validar se sua implementação está conforme os testes.
   - Não altere o arquivo de teste. Toda sua implementação deve se adequar a ele.

5. **Dica importante**: Utilize o TDD como metodologia.
   - Primeiro rode os testes e veja as falhas.
   - Implemente o mínimo necessário para passar em cada teste.
   - Refatore seu código conforme necessário.

## Requisitos

- Linguagem: **JavaScript**
- Framework: **Express**
- ORM: **Sequelize**
- Banco de Dados: **PostgreSQL**
- Testes: **Jest** e **Supertest**

## Entregas

- Código-fonte da API funcional
- Scripts de criação e migração da tabela `Livro`
- Documentação mínima (README com instruções de execução)
- **Não é necessário enviar os testes, apenas o código que os faz passar**

## Avaliação

A avaliação será feita com base nos seguintes critérios:

- Correção funcional (todos os testes devem passar)
- Organização e estrutura do código
- Uso adequado do Sequelize
- Validações de dados
- Aderência aos princípios do TDD

Boa sorte e bons testes! 🧪🚀