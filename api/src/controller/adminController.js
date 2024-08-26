import inserirUsuarioService from "../service/adminService.js";

import { Router } from "express";
const endpoints = Router()

endpoints.post('/login/adm', async (req,resp) => {
    try {
        // entrada
        let contaADM = req.body;

        // processamento
        let id = await inserirUsuarioService(contaADM);

        // saida
        resp.send({
            id: id
        })
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})  

export default endpoints;