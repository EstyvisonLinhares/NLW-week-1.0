import express, { response } from 'express'

const app = express();

app.use(express.json()); //Colocar uma funcionalidade para o express entender o corpo da nossa requisição em formato json

const users = [
    'Tito',
    'Teixa',
    'Robson',
    'Tin',
    'Caca',
    'Estyvison'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search); //Não façam isso em casa crianças!

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    return response.json(users[id])
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user); //return antes do response para que a requisição se encerre aqui
});

app.listen(3333);