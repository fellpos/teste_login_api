import con from './connection.js';

export async function inserirUsuario(contaADM) {
    let comando = `
        INSERT INTO tb_admin (ds_usuario, ds_senha)
            VALUES (?, ?);
    `
    
    let resposta = await con.query(comando, [contaADM.nome, contaADM.senha]);
    let info = resposta[0];


    let idAdm = info.insertId;
    return idAdm;
}