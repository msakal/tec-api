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

// Inserindo Alunos
function inserir(aluno, res) {
    // o "SET ?" estão vindo do MYSQL2 e a ? recebe os dados e atribui na ordem.
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {

        if ( erro ) {
            res.status(400).json(erro.code);                        // 400 => BAD Request (requisição inválida).
        } else {
            res.status(201).json( {"status": "Aluno inserido"} );   // 201 => Criado e apresenta a mensagem Aluno inserido.
        }
    });

}

// Exibe um aluno
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {

        if ( resultados.length === 0 ) {
            res.status(204).end();
            return;
        } 

        if ( erro ) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }

    });
}

// Atualizar Aluno,, recebe um id, os dados do aluno e res.
function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    // Ordem do array [aluno, id] é importante para fornecer/corresponder na requisição do sql
    conexao.query(sql, [aluno, id], (erro, resultados) => {

        if ( erro ) {
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json( {"status": "Atualizado com sucesso"} );

            // spread operator (operador de "espalhamento" de objeto)
            res.status(200).json( { ...aluno, id } );
        }

    }); 
}





export { ler, inserir, lerUm, atualizar };