import type {TechnicalSkill} from "../models/TechnicalSkill.ts";

export const technicalSkills: ReadonlyArray<TechnicalSkill> = [
    {
        name: 'Lenguaje de programación',
        info: 'Los Lenguajes con tipado estatico es lo que me encanta',
        options: [
            'TypeScript',
            'Javascript',
            'Python',
            'Kotlin',
            'Java',
        ]
    },
    {
        name: 'AI',
        info: 'Aprendiendo',
        options:[
            'Langgraph',
        ],
    },
    {
        name: 'Frameworks y Bibliotecas',
        info: 'Mas trabaje con Frameworks de frontend',
        options:[
            'Angular',
            'Vue',
            'Astro'
        ],
    },
    {
        name: 'Herramientas de Desarrollo',
        info: 'Mas trabaje con Frameworks de frontend',
        options:[
            'Git',
            'Gitlab',
            'GitHub',
            'Webstorm'
        ],
    },
    {
        name: 'Bases de datos',
        info: undefined,
        options:[
            'MongoDB',
        ],
    },
    {
        name: 'Desarrollo web',
        info: undefined,
        options:[
            'Javascript',
            'html',
            'css',
        ],
    },

]
