import express from "express";

const app = express();
const porta = 3000;

// Rotas

// GET
// Rota para raiz da API
app.get('/', (reg, res) => {
    res.send('É um dia lindo para aprender sobre APIs');
});

// Rota (endpoint) para exibir todos os alunos
// GET
app.get('/alunos', (reg, res) => {
    res.send('Exibindo todos os alunos');
});

// Rota (endpoint) para exibir UM único aluno
app.get('/alunos/:id', (reg, res) => {
    res.send('Exibindo dados de UM aluno');
});


// POST
// INSERIR alunos
app.post('/alunos', (reg, res) => {
    res.send('INSERINDO alunos');
});
// INSERINDO ALGUNS
app.post('/alunos/:id', (reg, res) => {
    res.send('INSERINDO alunos');
});

// PUT
app.put('/alunos/:id', (reg, res) => {
    res.send('ATUALIZANDO alguns/todos os dados de um aluno.');
});


// PATCH
app.patch('/alunos/:id', (reg, res) => {
    res.send('ATUALIZANDO alguns/todos os dados de um aluno.');
});

// DELETE
app.delete('/alunos/:id', (reg, res) => {
    res.send('EXCLUINDI aluno.');
});



// configurando servidor
app.listen(porta, () => {
    console.log('Servidor express rodando ..');
});