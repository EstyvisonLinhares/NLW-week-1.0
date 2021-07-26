import express, { response } from 'express'
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json()); //Colocar uma funcionalidade para o express entender o corpo da nossa requisição em formato json
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);