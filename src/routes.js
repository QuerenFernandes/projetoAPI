import { Router } from "express";

import { createTable, insertLista, updateLista, selectListas, selectLista, deleteLista } from './Controler/Lista.js';

//instanciando o Router
const router = Router();

router.get('/', (req, res)=> {
    res.json({
        "statusCode":  200,
        "msg": "api está rodando agora"
    })
})

router.get('/listas', selectListas);
router.get('/lista', selectLista);
router.post('/lista', insertLista);
router.put('/lista', updateLista);
router.delete('/lista', deleteLista);


export default router;