
import roles from '../../../data/roles.json' with {type: 'json'};
import campeones from '../../../data/campeones.json' with {type: 'json'};
import { getArquetipo } from './relations.js';

export class rolModel {
    static async getAllRoles() {
        return roles.map(role => {
            return {
                nombre: role.name,
                url: `http://localhost:1234/roles/${role.name.toLocaleLowerCase()}`
            }
        });
    }

    static async getByRole(input) {
        return roles.filter(role => role.name.toLocaleLowerCase() === input.toLocaleLowerCase())
            .map(role => {
                return {
                    id: role.id,
                    nombre: role.name,
                    icon: role.icon,
                    descripcion: role.description,
                    arquetipos : getArquetipo(role.arquetipos),
                    campeones: getByRole(role.id)
                }
            });
    }
}

function getByRole(id) {
    
    return campeones.filter(champ => {
            return champ.rol.includes(id)
        }).map(champ => {
            return {
                nombre: champ.name,
                url: `http://localhost:1234/campeones/${champ.name.toLocaleLowerCase()}`,
            }
        }) 
}

