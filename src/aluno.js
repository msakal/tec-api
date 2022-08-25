import conexao from './banco.js';

// Criando o CRUD

// função que LÊ a tabela 'alunos' do BD
function ler(res) {

    const sql = 'SELECT * FROM alunos ORDER BY nome';

    // conectando ao BD
    conexao.query(sql, (erro, resultados) => {
        if ( resultados.length === 0 ) {
            // O método .end() para qualquer comunicação.
            res.status(204).end();   // 204 => Sem conteúdo
            return;  // die()
        }
        if ( erro ) {
            res.status(400).json(erro.code);  // 400 => BAD Request (requisição inválida).
        } else {
            res.status(200).json(resultados); // 200 => Tudo certo, exibir os resultados
        }
    });

}

export { ler };