import Router from 'express';
import { ChampController } from '../controller/champController.js';
import { arquetipoController } from '../controller/arquetiposController.js';
import { rolController } from '../controller/rolController.js';

export const champRouter = Router();

champRouter.get('/', (req, res) => {
    res.send('Welcome to the League of Legends API');
});
champRouter.get('/campeones', ChampController.getChamp);

champRouter.get('/campeones/:name', ChampController.getByName);

champRouter.get('/roles', rolController.getAllRol);

champRouter.get('/roles/:rol', rolController.getByRol);

champRouter.get('/arquetipos', arquetipoController.getAllArquetipos);

champRouter.get('/arquetipos/:name', arquetipoController.getByArquetipo);

champRouter.post('/campeones', ChampController.createChamp);

//post 
//patch


