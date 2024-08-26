import { inserirUsuario } from "../repository/adminRepository.js";


export default async function inserirUsuarioService(contaADM) {
    
    // buscar pelo nome e guardar em uma var

    // validar se existe outro igual

    // logica de negocio
    let id = await inserirUsuario(contaADM);
    return id;

}