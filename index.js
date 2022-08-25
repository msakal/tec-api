import express from "express";

const app = express();
const porta = 3000;

// Rotas

// Rota (endpoint) para a raiz da API
app.get('/', (req, res) => {
    res.send(`Página inicial da Aplicação (Raiz da API).`);
});

// Rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send(`Exibe TODOS os alunos`);
});
// Rota (endpoint) para exibir um único aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Exibe dados de UM aluno.`)
});


// Rota (endpoint) para INSERIR alunos
app.post('/alunos', (req, res) => {
    res.send(`ADICIONA aluno.`)
});


// Rota (endpoint) para atualizar TODOS os dados do aluno
app.put('/alunos/:id', (req, res) => {
    res.send(`ATUALIZA TODOS os dados de um aluno.`)
});
// Rota (endpoint) para atualizar ALGUNS/TODOS os dados do aluno
app.patch('/alunos/:id', (req, res) => {
    res.send(`ATUALIZA ALGUNS/todos os dados de um aluno.`)
});


// Rota (endpoint) para EXCLUIR aluno
app.delete('/alunos/:id', (req, res) => {
    res.send(`EXCLUI aluno.`)
});


// configurando servidor
app.listen(porta, () => {
    console.log('Servidor express rodando ..');
});