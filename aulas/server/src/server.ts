import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Tito',
        'Teixa',
        'Robs',
        'Tin',
        'Caca'
    ]);
});

app.listen(3333);