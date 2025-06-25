import z from 'zod';
import { success } from 'zod/v4';

//HACER ENTRICTAS TODAS LAS VALIDACIONES //

const splash = z.object({
    name: z.string().min(3, "Required name").max(28, "long name"),
    url: z.string(),
    prestige : z.object({
        name: z.string().min(3, "Required name").max(34, "long name"),
        url: z.string(),
    }).optional()
})

const splashSchema = z.record(splash);

const habilidad = z.object({
    name : z.string().min(3, "Required name").max(24, "long name"),
    description : z.string().min(3, "Required description").max(820, "long description"),
    icon : z.string(),
    mp4 : z.string().optional()
})

const habilidadesSchema = z.object({
    pasiva: habilidad,
    q: habilidad,
    w: habilidad,
    e: habilidad,
    r: habilidad
})

const champSchema = z.object({
    name : z.string().min(3, "is short name ").max(24, "long name"),
    nickname : z.string().min(3, "Required nickname").max(36, "long nickname"),
    arquetipo : z.array(z.number().int().positive().min(1, "no hay menores de uno").max(6, "no hay mayores de seis")),
    rol : z.array(z.number().int().positive().min(1, "no menores de  uno").max(5, "no mayores de cinco")),
    sprites : z.object({
        icon : z.string(),
        splashArt : splashSchema,
    }),
    habilidades : habilidadesSchema,
    fecha : z.object({
        release: z.string(),
        update: z.string().optional()
    })
})

export function validateChamp(champ) {
    try {
        const result = champSchema.safeParse(champ);
        return result;
    } catch (error) {
        return { success: false, details: error.errors};
    }
}



const champ = {
        "id": 7,
        "name": "Ahri",
        "nickname": "La Vastaya de Nueve Colas",
        "arquetipo": [4],
        "rol": [3],
        "sprites": {
            "icon": "",
            "splashArt": {
                "base": {
                    "name": "Ahri",
                    "url": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
                },
                "estrellaDelPop": {
                    "name": "Ahri Estrella del Pop",
                    "url": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg"
                },
                "guardianaEstelar": {
                    "name": "Ahri Guardiana Estelar",
                    "url": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg"
                }
            }
        },
        "habilidades": {
            "pasiva": {
                "name": "Esencia Robada",
                "icon": "https://ddragon.leagueofoflegends.com/cdn/14.13.1/img/passive/Ahri_Passive.png",
                "description": "Ahri obtiene una acumulación de Esencia Robada por cada campeón al que golpea con una habilidad. Al alcanzar 9 acumulaciones, Ahri restaura una gran cantidad de vida. Después de consumir Esencia Robada, Ahri genera acumulaciones adicionales al asesinar súbditos y monstruos.",
                "mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.mp4"
            },
            "q": {
                "name": "Orbe de Engaño",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/AhriOrbofDeception.png",
                "description": "Ahri lanza un orbe que se extiende y regresa, infligiendo daño mágico al ir y daño verdadero al regresar. Ahri obtiene velocidad de movimiento adicional que disminuye rápidamente mientras el orbe está fuera.",
                "mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.mp4"
            },
            "w": {
                "name": "Fuego Zorruno",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/AhriFoxFire.png",
                "description": "Ahri invoca tres fuegos de zorro que orbitan a su alrededor. Tras un breve momento, los fuegos atacan automáticamente a los enemigos cercanos, priorizando a los objetivos afectados por Encanto y restaurando maná al golpear.",
                "mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.mp4"
            },
            "e": {
                "name": "Encanto",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/AhriSeduce.png",
                "description": "Ahri lanza un beso que daña a un enemigo y lo encanta, haciendo que camine inofensivamente hacia ella. También reduce la Resistencia Mágica del objetivo.",
                "mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.mp4"
            },
            "r": {
                "name": "Impulso Espiritual",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/AhriSpiritRush.png",
                "description": "Ahri se desliza rápidamente y dispara proyectiles de esencia a hasta tres enemigos cercanos (priorizando campeones). Puede lanzar Impulso Espiritual hasta 3 veces en un breve periodo antes de que entre en enfriamiento.",
                "mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.mp4"
            }
        },
        "fecha": {
            "release": "2010-05-11",
            "update": "2018-07-18"
        }
    }
/*
    try {
        const result = champSchema.parse(champ);
        console.log("Validation succeeded:", result);

    }catch (error) {
        console.error("Validation failed:", error);
    }*/