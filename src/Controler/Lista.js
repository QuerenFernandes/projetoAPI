import { openDb } from "../configDb.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Lista (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT, dtIni TEXT, dtFim TEXT)')
    })
};

export async function selectListas(req, res){
    openDb().then(db=>{
       db.all('SELECT * FROM Lista')
       .then(listas=> res.json(listas))
   });
};

export async function selectLista(req, res){
   let id = req.body.id;
    openDb().then(db=>{
       db.get('SELECT *FROM Lista WHERE id=?', [id])
       .then(lista=> res.json(lista));
   })
};

export async function insertLista(req, res){
    let lista = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Lista (nome, descricao, dtIni, dtFim) VALUES (?, ?, ?, ?)', [lista.nome, lista.descricao, lista.dtIni, lista.dtFim])
    })
    res.json ({
        "statusCode": 200
    })
};

export async function updateLista(req, res){
    let lista = req.body;
    openDb().then(db=>{
        db.run('UPDATE Lista SET nome=?, descricao=?, dtIni=?, dtFim=? WHERE id=?', [lista.nome, lista.descricao, lista.dtIni, lista.dtFim, lista.id])
    })
    res.json ({
        "statusCode": 200
    })
};



export async function deleteLista(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Lista WHERE id=?', [id])
        .then(res=>res);
    })
    res.json ({
        "statusCode": 200
    })
};