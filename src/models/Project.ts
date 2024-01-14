export interface Project {
    title: string,
    descriptions: string[],
    tools: string[],
    imagesSrc: string[],
    repositories: { name:string,src: string }[],
    icon: string | undefined,
    video?: string | undefined
}
