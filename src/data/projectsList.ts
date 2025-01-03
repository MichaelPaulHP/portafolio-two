import type {Project} from "../models/Project.ts";

const pathImage = "/projectImages";


export const yourProjectList: Project[] = [    {
    title:'Automatización usando CI/CD GitLab',
    tools: [
        'CI/CD',
        'GitLab',
        'Runner',
        'Pipeline',
        'Shell',
        'Microsoft Power Automate',
        'Microsoft Teams',
        'Jira Automation',
        'Jira version',
    ],
    repositories:[ ],
    descriptions:[
        'Estoy en esto. Te invito a explorar revisa mis otros proyectos',
        '',
        ''
    ],
    imagesSrc:[],
    icon: undefined,
    infoOnTooltip: 'Proyecto desarrollado en Bantotal Bpeople.',
    },
    {
        title:'RAG Application',
        tools: [
            'Langchain',
            'OpenAI API',
            'OpenAI: LLM models',
            'OpenAI: Embeddings models',
            'MongoDB Atlas: VectorDB',
            'Google Cloud Platform: Cloud run',
            'Serverless',
            'FastAPI',
            'Google Colab'
        ],
        repositories:[ ],
        descriptions:[
            'Tenía que hacer algo con AI, coincidí con RAG( Retrieval-augmented generation) y Langchain.',
            'Para poner en practica lo que investigue,  he decidió  hacer un ChatBot para mi portafolio.',
            'He decido dar información que hay en mi portafolio como contexto a un modelo LLM.',
            'He desarrollado un API con FastAPI  que utiliza el model “text-embedding-3-small” para ir a buscar vectores que    están  relacionados con la pregunta del usuario, para  que luego  este sirva   como  contexto  al modelo GPT-3.5 Turbo y este responder a la pregunta.',
            'Para la generación de los vectores,  la fuente de datos es mi CV y información que hay en mi portafolio. Langchain me ayudo para hacer el   chunking/splitting,  “text-embedding-3-small” para generar los vectores y  finalmente guarda estos en el VectorDB de MongoDB Atlas.',
            'Para UI, decidí agregar un chat en mi portafolio, ya lo deberías de hacer visto.',
            'La API esta deployado en Cloud Run.',
            'La imagen es de un curso de MongoDB Atlas.'
        ],
        imagesSrc:[pathImage + "/rag/image3.png"],
        icon: undefined,
        infoOnTooltip: undefined,
    },
    {
      title:'this',
      tools:[
          'Astro',
          'Vue 3',
          'Vercel static web hosting',
          'Vercel analytics',
      ],
        repositories:[{
          name:'GitHub',
           src:'https://github.com/MichaelPaulHP/portafolio-two'
        }],
        descriptions:[
            'He desarrollado una aplicación web para exponer mis datos personales, información profesional y proyectos',
            'El objetivo es aprender Astro y construir una marca personal.',
            'Elegí Astro para optimizar la velocidad de carga y mejorar la visibilidad en los motores de búsqueda.',
            'Aproveche las herramientas de Vercel, como el hosting para sitios web estáticos y análisis de datos'
        ],
        imagesSrc:[ ],
        icon: undefined,
        infoOnTooltip: undefined,
    },
    {
        title: 'Modulo de pre-solicitudes',
        icon: undefined,
        repositories: [],
        tools: [
            'FrontEnd',
            'Angular v16',
            'Typed Forms',
            'TypeScript "Strict Mode"',
            'View Models',
            'Presenter',
            'La Artesanía del código limpio - Robert C. Martin ',
            'Husky',
            'Eslint',
            'Prettier',
            'Git hooks',
            'En Bpeople-Bantotal'
        ],
        imagesSrc: [
            pathImage + "/s/s10.png",
            pathImage + "/s/s20.png",
            pathImage + "/s/s30.png",
            pathImage + "/s/s40.png",
            pathImage + "/s/s50.png",
        ],
        descriptions: [
            'Aplicación web web  registras pre solicitudes.',
            'Utilicé herramientas avanzadas para la convención de commits y el formateo de código, contribuyendo a nuestra disciplina. Lo que resultó en una mejora significativa en la calidad y mantenibilidad del código. Detalles destacados:\n' +
            'Herramientas Utilizadas: Conventional Commits, Semantic Versioning, Husky, Eslint y Prettier',
            'Al iniciar el proyecto, me propuse tipificar exhaustivamente todos los componentes, abarcando desde nuestras fuentes de datos hasta la interfaz de usuario'

        ],
        video: undefined,
        infoOnTooltip:'Proyecto desarrollado en Bantotal, con una interfaz diseñada por el equipo de diseño de la empresa.'
    },
    {
        title: 'Crédito Vehicular',
        icon: undefined,
        repositories: [],
        tools: [
            'FrontEnd',
            'Angular v15',
            'TypeScript',
            'View Models',
            'Presenter',
            'Arquitectura limpia - Robert C. Martin ',
            'Branching strategy',
            'En Bpeople-Bantotal'
        ],
        imagesSrc: [
            pathImage + "/ma/m10.png",
            pathImage + "/ma/m20.png",
            pathImage + "/ma/m30.png",
            pathImage + "/ma/m40.png",
        ],
        descriptions: [
            'Aplicación web  para otorgar créditos vehiculares, consta de varias etapas, con varias simulaciones',
            'Reto 1: permite a los usuarios navegar libremente entre las etapas, asegurándose de que, al cambiar a una etapa específica, se tome la simulación más reciente correspondiente a esa etapa.',
            'Reto 2: Cuando un usuario regresa a una etapa anterior, la página se debe mostrar tal como se dejó, con todos los datos e interacciones previas intactos. Aquí uno de mis mayores errores.',
            'Aplicando los conceptos aprendidos en \'Arquitectura Limpia\', implementé la UI mediante el uso de modelos de vista (View Model) y asigné la responsabilidad de crear estos modelos al Presenter. De esta manera, cada página fue diseñada con un Presenter asociado, asegurando una estructura clara y una separación efectiva de responsabilidades.',
            'Actualizamos nuestra estrategia de ramificación para mejorar la eficiencia del desarrollo y asegurar el cumplimiento de los plazos de entrega del cliente.',
            'Me di cuenta que la mejor manera de representar incertidumbre de algo, es definirlo como T |  null | undefined.',
        ],
        video: undefined,
        infoOnTooltip:'Proyecto desarrollado en Bantotal, con una interfaz diseñada por el equipo de diseño de la empresa.'
    },
    {
        title: 'OB SAAS',
        icon: undefined,
        repositories: [],
        tools: [
            'FrontEnd',
            'Angular v14',
            'i18n',
            'Multiples Estilos',
            'POO',
            'JIRA',
            'Una rama por issue/feature',
            'Branching strategy',
            'TS - Null safety ',
            'Conventional Commits',
            'Semantic Versioning',
            'En Bpeople-Bantotal'
        ],
        imagesSrc: [
            pathImage + "/qtc/q10.png",
            pathImage + "/qtc/q20.png",
            pathImage + "/qtc/q30.png",
        ],
        descriptions: [
            'Aplicación web integrada con módulos de venta y posventa.',

            'Implementé funcionalidades de soporte multilingüe y personalización flexible de la UI, utilizando variables en SCSS.',
            'Reestructuramos las ramas para asegurar que solo las funcionalidades o issues aprobados se entreguen para las fechas establecidas.',
            'Aprendimos a usar Jira',
            'Amplié mis conocimientos en TypeScript, centrándome en características avanzadas como la seguridad de tipo nulo (null safety), Nullish coalescing, y el uso de \'null\' o \'undefined\' como tipos específicos. permitiendome identificar y corregir proactivamente posibles errores en el código',

        ],
        video: undefined,
        infoOnTooltip:'Proyecto desarrollado en Bantotal, con una interfaz diseñada por el equipo de diseño de la empresa.'
    },
    {
        title: 'Primer Proyecto con Angular',
        icon: undefined,
        repositories: [],
        tools: [
            'FrontEnd',
            'Angular v8',
            'Angular Forms',
            'Custom Validations',
            'POO',
            'Bootstrap Grid',
            'Definir los responses como tipos de datos',
            'En Bpeople-Bantotal'
        ],
        imagesSrc: [
            pathImage + "/f/f10.png",
            pathImage + "/f/f20.png",
            pathImage + "/f/f30.png",
            pathImage + "/f/f40.png",
            pathImage + "/f/f50.png",
            pathImage + "/f/f60.png",
            pathImage + "/f/f70.png",
        ],
        descriptions: [
            'Es un sistema para otorgar créditos de varios productos, desde casas rodantes hasta financiamiento para estudios universitarios. Se desarrolla a través de etapas definidas, comenzando con la recopilación de datos del cliente, seguido de una simulación de crédito y culminando con la documentación requerida.',
            'Incorporé validaciones personalizadas, divididas en dos componentes clave para la y legibilidad y reusabilidad del código. Primero, una función dedicada exclusivamente a la validación. Segundo, la función ValidatorFn, que utiliza esta función pura y genera mensajes de error específicos para entradas inválidas. Un ejemplo es new FormControl(null, [Validators.isRUT]), donde isRUT es un ValidatorFn utilizada para validar RUTs. todo esto facilita su mantenimiento y testing',
            'Generación de documentos PDF, herencia para asegurar un formato consistente en todos los documentos, Establecí una clase base que define el estilo y estructura común. Además, separé efectivamente la vista de los datos',
            'Pagina de resultado: varios motivos para estar aprobado o rechazado, ver Diagrama de clases, por ejemplo los documentos de un Result dependen de muchas cosas.',
            'Documentos: con posibilidad de subir, actualizar, eliminar, ver incidencias, firmar digitalmente, ver estado de la firma. tambien use POO, ver imagen',
            'Retoma, posibidad de ir a la ultima etapa completada.'
        ],
        video: undefined,
        infoOnTooltip:'Proyecto desarrollado en Bantotal, con una interfaz diseñada por el equipo de diseño de la empresa.'
    },

    {
        title: "Escuchando Spotity",
        descriptions: [
            "Esta aplicación escucha la canción que escuchas en tu Spotify y te da la opción de buscar esa canción en YouTube.",
            "Guardamos metadatos de las canciones buscadas en YouTube, conservando estos datos directamente en el dispositivo del cliente para un acceso rápido.",
            "Una App con kotlin haciendo uso de MVVM, LiveData, Room de Jetpack y por último Kotlin coroutines con retrofit y Room"],
        tools: ["Android", "Kotlin", "MVVM", "LiveData", "MutableLiveData", "Room", "Jetpack", "Kotlin coroutines"],
        imagesSrc: [
            pathImage + "/list/1listeningspotify.jpg",
            pathImage + "/list/2listeningspotify.jpg",
            pathImage + "/list/3listeningspotify.jpg",
            pathImage + "/list/4listeningspotify.jpg",
        ],
        repositories: [
            {name: "App Mobil", src: "https://github.com/MichaelPaulHP/"},
            {name: "BackEnd", src: "https://github.com/MichaelPaulHP/"}
        ],
        icon: pathImage + "/list/icon.png",
        video: pathImage + "/list/video.mp4",
        infoOnTooltip: undefined
    },
    {
        title: "Resolver Sudoku",
        descriptions: ["Una aplicación web hecho con VueJs y Vuetify"],
        tools: ["VueJs", "Vuetify"],
        imagesSrc: [pathImage + "/sudoku/home.png"],
        repositories: [],
        icon: pathImage + "/sudoku/icon.png",
        video: pathImage + "/sudoku/video.mp4",
        infoOnTooltip: undefined
    },
    {
        title: "Spotify y YouTube",
        descriptions: [
            "Esta es una aplicación que te permite buscar o ver video de YouTube a partir de una canción que tienes en Spotify.",
            "Este fue mi primera aplicación con Flutter para móvil, he quedado flipando con BloC(Business Logic Components.) porque todo a partir de eventos he logrado manejar la UI según los estados que emiten cada evento.",
            "He utilizado la API de Spotify y YouTube para obtener las playlists y buscar en YouTube respectivamente."],
        tools: ["Flutter", "Mobile", "BLoC", "Spotify API", "Spotify Authorization", "YouTube Data API", "Firebase AUTH", "Firebase Cloud Firestore"],
        imagesSrc: [
            pathImage + "/sy/1s_and_y.jpg",
            pathImage + "/sy/2s_and_y.jpg",
            pathImage + "/sy/3s_and_y.jpg",
            pathImage + "/sy/4s_and_y.jpg",
            pathImage + "/sy/5s_and_y.jpg",
        ],
        repositories: [
            {name: "App Mobil", src: "https://github.com/MichaelPaulHP/"},
            {name: "BackEnd", src: "https://github.com/MichaelPaulHP/"}
        ],
        icon: pathImage + "/sy/icon.png",
        video: pathImage + "/sy/video.mp4",
        infoOnTooltip: undefined
    },
    {
        title: "Concurrencia",
        descriptions: ["Teniendo conocimientos ya intermedios de Android Java, y haber leído Clean Code de Robert C. Martin, Empecé el proyecto con dos cosas en mente: Clean code y UnitTest.", " Lo que quise lograr es una de las condiciones para que sea código limpio es el llamado “si pasa todas las pruebas, probablemente sea código limpio”, es por ello por lo que en el backend utilicé por primera vez mocha y Jest en NodeJS. En la aplicación móvil también traté de hacer pruebas unitarias, pero fueron muy pocas. En este proyecto tuve la intención de hacer un código más legible"],
        tools: ["Android", "Java", "Firebase Auth", "Google Places", "MVVM", "Data Binding", "MapBox", "Retrofit", "Firebase DB Real Time", "SocketIO", "NodeJS", "API REST", "MongoDB", "Mongoose", "Unit Test", "Jest", "Mocha", "Chai", "Clean Code"],
        imagesSrc: [
            pathImage + "/c/c_main.jpg",
            pathImage + "/c/c_origin.jpg",
            pathImage + "/c/c_findDest.jpg",
            pathImage + "/c/c_current.jpg",
            pathImage + "/c/c_destin.jpg",
            pathImage + "/c/c_find.jpg",
            pathImage + "/c/c_join.jpg",
        ],
        repositories: [
            {name: "App Mobil", src: "https://github.com/MichaelPaulHP/Concurrent"},
            {name: "BackEnd", src: "https://github.com/MichaelPaulHP/concurrentServe"}
        ],
        icon: pathImage + "/c/icon.png",
        infoOnTooltip: undefined
    },
    {
        title: "Home",
        descriptions: ["Lo más importante que aprendí: falta de comunicación con el equipo y el ego de algunos participantes da consecuencias negativas en un proyecto. Pero tenemos que sacar el lado bueno de las cosas, por ello me siento orgulloso de poder decir a mi asistente “Wells, apaga las luces” y ver como se apaga el led, como muestra este cambio en la aplicación, sin duda algo emocionante.", " Conociendo el DataBinding de Angular busqué algo parecido para Android y es cuando Conocí el Android Jetpack y este fue el inicio de otra aventura."],
        tools: ["Android", "Java", "Firebase Auth", "Service", "Data Binding", "MVVM", "MapBox", "Retrofit", "SocketIO", "NodeJS", "API REST", "Firebase Admin", "Python", "Raspberry PI", "RxPy", "Usabilidad", "Google Assistant", "DialogFlow"],
        imagesSrc: [
            pathImage + "/home_white.jpg",
            pathImage + "/home_black.jpg",
            pathImage + "/home_menu.jpg",
            pathImage + "/home_config.jpg",
            pathImage + "/home_info.jpg",
            pathImage + "/home_chat.jpg",
            pathImage + "/home_map.jpg",
            pathImage + "/home_assi.jpg",
            pathImage + "/home_arq.jpg",
        ],
        repositories: [
            {name: "BackEnd", src: "https://github.com/MichaelPaulHP/ihomeServe"},
            {name: "App Mobil", src: "https://github.com/MichaelPaulHP/IHome"},
            {name: "Raspberry PI", src: "https://github.com/MichaelPaulHP/ihomeServe"}
        ],
        icon: pathImage + "/icon.png",
        infoOnTooltip: undefined
    },
    {
        title: "Encrypt-Criptografía asimétrica",
        descriptions: ["Lo más importante fue sockets, fue mi primera vez que he utilizado sockets en este caso he utilizado la libreria SocketIO.", " Es donde aprendí la existencia del UIThread porque algunas cosas se tienen que correr en el hilo de la interfaz de usuario si estas en otro thread que desea cambia la UI, las dificultades en probar la interacción entre un emisor y receptor(reconoce al otro usuario, llega un mensaje, envía un mensaje,etc)"],
        tools: ["Java", "Android", "SocketIO", "Sockets", "NodeJS"],
        imagesSrc: [
            pathImage + "/encrypt/encrypt_main.jpg",
            pathImage + "/encrypt/encrypt_userOne.png",
            pathImage + "/encrypt/encrypt_user.jpg",
            pathImage + "/encrypt/encrypt_info.png",
        ],
        repositories: [
            {name: "App Mobil", src: "https://github.com/MichaelPaulHP/Encrypt"},
            {name: "BackEnd", src: "https://github.com/MichaelPaulHP/Encrypt"}
        ],
        icon: pathImage + "/mobil.png",
        infoOnTooltip: undefined
    },
    {
        title: "Sistema de Invetario",
        descriptions: ["Un Proyecto Colaborativo donde me he iniciado en VueJS, donde he desarrollado un componente que haga CRUD a cualquier tabla maestra '<crud><category-form/></crud>', para complementar este componente en el backend he implementado un clase llamado 'BaseModel' cuyo método principal es 'fillAndSave' encargado de tomar datos, y guardar si son válidos según las reglas de validación del modelo que la implemente, también un 'Base Controller' que utiliza el 'fillAndSave' del 'Base Model' para dar el response correspondiente con su status code. Fue mi primera vez Haciendo Pruebas unitarias, en este caso a controladores"],
        tools: ["VueJS", "CRUD", "Modal", "Vuelidate", "REST API", "Laravel", "Base CRUD Controller", "Base Model", "Git", "GitHub"],
        imagesSrc: [
            pathImage + "/si/si_main.png",
            pathImage + "/si/si_crudMain.png",
            pathImage + "/si/si_modal.png",
            pathImage + "/si/si_edit.png",
            pathImage + "/si/si_delete.png",
        ],
        repositories: [
            {name: "Repositorio", src: "https://github.com/DeyvyMY/SICPAV2"},
        ],
        icon: pathImage + "/web.png",
        infoOnTooltip: undefined
    },
    {
        title: "Portafolio V1",
        descriptions: ["Mi sitio personal es una PWA para dar a conocer mis proyectos, esta hecho totalmente con VueJS, con la reutilización de componentes de Vuetify he logrado implementar esta aplicación de manera muy rápida, la dificultad que tuve fue en el diseño de la UI en como mostrar mis proyectos"],
        tools: ["PWA", "VueJS", "Vuetify", "Firebase Analytics", "Firebase hosting", "Git", "GitHub"],
        imagesSrc: [
            pathImage + "/portafolio/main.png",
            pathImage + "/portafolio/mainB.png",
            pathImage + "/portafolio/mobil.jpg",
        ],
        repositories: [
            {name: "Repositorio", src: "https://github.com"},
        ],
        icon: pathImage + "/portafolio/icon.png",
        infoOnTooltip: undefined
    },
];



