export interface Project {
    title: string,
    description: string,
    tools: string[],
    imagesSrc: string[],
    repositories: { name:string,src: string }[],
    icon: string,
    video?: string | undefined
}
