import {champModel} from '../model/local/champModel.js';
import {validateChamp} from '../validations/validateChamp.js';

export class ChampController {

    static async getChamp(req, res) {
        //const  { role, archetype } = req.query

        try {
            const champs = await champModel.getChamp();
            res.status(200).json(champs);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getByName(req, res) {
        const { name } = req.params;
        try {
            const champ = await champModel.getByName(name);
            if (!champ) {
                return res.status(404).json({ error: 'Champion not found' });
            }
            res.status(200).json(champ);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async createChamp(req , res){
        const champData = validateChamp(req.body);

        if (!champData.success) {
            return res.status(400).json({
                error : 'bad request', 
                errors: champData.error
            });
        }
        return res.status(201).json(champData)
        /*
        try {
            const newChamp = await champModel.createChamp(champData);
            res.status(201).json(newChamp);
        } catch (error) {
            res.status(400).json({ error: 'Bad Request', message: error.message });
        }*/
    }
}