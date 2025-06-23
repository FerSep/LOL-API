import arquetipo from '../../../data/arquetipos.json' with {type: 'json'};
import campeones from '../../../data/campeones.json' with {type: 'json'};
import  {getRoles} from './relations.js';

export class arquetipoModel {
    static async getAllArquetipos(){
        return arquetipo.map(arc => {
            return {
                nombre: arc.name,
                url: `http://localhost:1234/arquetipos/${arc.name.toLocaleLowerCase()}`
            }
        })
    }

    static async getByArquetipo(input){
        return arquetipo.filter(arc => arc.name.toLocaleLowerCase() === input.toLocaleLowerCase())
        .map(arc => {
            return {
                id: arc.id,
                nombre: arc.name,
                icon : arc.icon,
                descripcion: arc.description,
                roles: getRoles(arc.roles),
                campeones: getChampionsArc(arc.id)
            }
        })
    }
}

function getChampionsArc(array) {
    
    return campeones.filter(champ => {
            return champ.arquetipo.includes(array)
        }).map(champ => {
            return {
                nombre: champ.name,
                url: `http://localhost:1234/campeones/${champ.name.toLocaleLowerCase()}`,
            }
        }) 
}
