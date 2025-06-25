import campeones from '../../../data/campeones.json' with {type: 'json'};
import { getArquetipo, getRoles } from './relations.js'; 

export class champModel {
    static async getChamp(){
        return campeones.map(champ => {
            return {
                nombre: champ.name,
                nickname: champ.nickname,
                url: `http://localhost:1234/campeones/${champ.name.toLocaleLowerCase()}`
            }
        })
    }
    static async getByName(name){
        const champ = campeones.find(champion => champion.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        if (!champ) {
            return null;
        }
        return {
            ...champ,
            arquetipo : getArquetipo(champ.arquetipo),
            rol : getRoles(champ.rol),
        }
    } 
}
