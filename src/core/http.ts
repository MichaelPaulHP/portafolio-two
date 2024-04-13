import type {Endpoint} from "../constans/endpoints.ts";

export abstract class Http{

    private static  URL_BASE = 'https://chatme-cehzkmha7q-ue.a.run.app/'

    static async post(endpoint: Endpoint, params: unknown){
        const url = `${Http.URL_BASE}${endpoint}`
        const res = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Indica el tipo de contenido
            },
            body: JSON.stringify(params),
        })
        if (!res.ok) {
            throw new Error(`Error en la petición: ${res.statusText}`);
        }

        return res.json();
    }


    static async get(endpoint: Endpoint) {
        const url = `${Http.URL_BASE}${endpoint}`
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Error in the request: ${res.statusText}`);
        }

        return res.json();
    }
}
