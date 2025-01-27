export type Endpoint = `${string}/`

export const APIS:{[key:string]: Endpoint} = {
    QA:'qa/',
    NEW:'new/',
    QA_STREAM:'simple_stream/'
}
