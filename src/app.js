import express from 'express';
import {champRouter} from './router/campeones.js';

const PORT = process.env.PORT || 1234;
const app = express();

app.use(express.json());



app.use('/', champRouter)

app.use((req, res) => {
    res.status(404).send('Not Found');
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});