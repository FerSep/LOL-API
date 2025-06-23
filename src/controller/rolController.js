import { rolModel } from "../model/local/rolModel.js";
export class rolController {

    static async getAllRol(req, res){

        try {
            const result = await rolModel.getAllRoles();

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getByRol(req, res){
        const { rol } = req.params;
        try {
            const result = await rolModel.getByRole(rol);
            if (!result) {
                return res.status(404).json({ error: 'arquetipo not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}