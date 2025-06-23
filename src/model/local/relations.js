
import arquetipos from '../../../data/arquetipos.json' with {type: 'json'};
import roles from '../../../data/roles.json' with {type: 'json'};


export  function getArquetipo(array){
    return array.map(id =>{
        const arq =arquetipos.find(arquetipo => arquetipo.id === id)
        if (arq) {
            return {
                    id: arq.id,
                    nombre: arq.name,
                    url : `http://localhost:1234/arquetipos/${arq.name}`,
                }
        }
    })
}

export  function getRoles(array){
    return array.map(id =>{
        const rol = roles.find(role => role.id === id)
        if (rol) {
            return {
                    id: rol.id,
                    nombre: rol.name,
                    url : `http://localhost:1234/roles/${rol.name}`,
                }
        }
    })
}
