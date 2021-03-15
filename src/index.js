//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 4000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(4000);

let id = 2;
let livros = [{
    id: "1",
    titulo: "O Futurista",
    descricao: "Um homem que veio do futuro em acerto de contas com seus amigos, familiares e demais pessoas do ciclo da vida dele",
    edicao: "1",
    autor:"Stenk Frankilin",
    isbn: 123456
    },

    {
    id: "2",
    titulo: "O Invisível",
    descricao: "Ao seus 37 anos, William James, descobriu seu poder de invisibilidade, mas com um propósito, estar em áreas da inteligencia americana da area de pesquisa ",
    edicao: "1",
    autor:"George Malor",
    isbn: 654321
    }
];

// Busca Livros existente na coleção "livros"
app.get("/livros", (req,res,next) => {
    res.status(200).json(livros);
});
/* ----------------------------------------------------- */

// Cadastrar livro
app.post("/livros", (req, res, next) => {
    livro = req.body;
    livro = {
        id: id += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbn: req.body.isbn
    }
    livros.push(livro);
    res.status(201).json(livro);
});
/* ----------------------------------------------------- */

// Atualizar um livro
app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if(livro.id === req.body.id){
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor,
            livro.isbn = req.body.isbn
        }
    });
    res.status(204).end();
});

/* ----------------------------------------------------- */

// Deletar um livro

let livrosClear = []; // Variável auxiliar para armazenar estado.

app.delete("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if(livro.id != req.body.id){
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor,
            livro.isbn = req.body.isbn
        }
        livrosClear.push(livro);
    });
    livros = livrosClear;
    res.status(204).end();
});

/* ----------------------------------------------------- */

