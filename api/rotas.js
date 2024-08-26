import express from 'express'

import adminController from '../api/src/controller/adminController.js';

export default function adcionarRotas(servidor) {
    servidor.use(adminController)

    // servidor.use('/storage/capa', express.static('./storage/capa'));
}