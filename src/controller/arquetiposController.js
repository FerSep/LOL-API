import  { arquetipoModel } from '../model/local/arquetipoModel.js';
export class arquetipoController {

    static async getAllArquetipos(req, res){
        try {
            const result = await arquetipoModel.getAllArquetipos();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getByArquetipo(req, res){
        const { name } = req.params;
        try {
            const result = await arquetipoModel.getByArquetipo(name);
            if (!result) {
                return res.status(404).json({ error: 'arquetipo not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}
