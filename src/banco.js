import mysql from 'mysql2';

// configurando a conexão
const conexao = mysql.createConnection({
    // Local ...
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'

    // Remoto ...
    // host: 'ns350.hostgator.com.br',
    // user: 'alvoea33_esc-msa',
    // password: 'msa123',
    // database: 'alvoea33_esc-msa'
});


// conectando ao banco de dados
// conexao.connect();
conexao.connect(erro => {
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        // console.log(`Banco de dados conectado com sucesso!`);
        console.log(`Banco conectado em: ${conexao.config.host}`);
    }
});

export default conexao;
