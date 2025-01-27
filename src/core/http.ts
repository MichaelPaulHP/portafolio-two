import type {Endpoint} from "../constans/endpoints.ts";

export abstract class Http{

    private static  URL_BASE = 'https://chatme-cehzkmha7q-ue.a.run.app/'
    //private static  URL_BASE = 'http://127.0.0.1:8000/'

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

    static async* stream(endpoint: Endpoint, params: unknown) {

        const response = await fetch(`${Http.URL_BASE}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            throw new Error(`Error in the request: ${response.statusText}`);
        }
        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");
        if(!reader){
            return
        }
        while ( true) {

            try {
                const {done, value} = await reader.read();
                if (done)  return  ;
                if(value){
                    const chunk = decoder.decode(value);
                    const messages = chunk.split('\n\n');

                    for (const message of messages) {
                        if (message.trim() === '') continue;

                        const jsonStr = message.replace('data: ', '');
                        const json :{answer?: string, error?:string}  = JSON.parse(jsonStr);
                        yield json;

                    }
                    /*const data = decoder.decode(value)
                    const json:{answer?: string, error?:string} = JSON.parse(data)

                    yield json;*/
                }
            } catch (error) {
                reader.cancel();
                throw error;
            }

        }
    }


}
