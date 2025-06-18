import Router from 'express';
import { ChampController } from '../controller/champController.js';

export const champRouter = Router();

champRouter.get('/', (req, res) => {
    res.send('Welcome to the League of Legends API');
});
champRouter.get('/campeones', ChampController.getChamp);

champRouter.get('/campeones/:name', ChampController.getByName);

champRouter.get('/roles',)

champRouter.get('/roless/:rol')

champRouter.get('/arquetipos',)

champRouter.get('/arquetipos/:arquetipo',)

//post 
//patch


