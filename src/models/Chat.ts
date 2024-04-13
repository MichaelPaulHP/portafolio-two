import {Http} from "../core/http";
import {APIS} from "../constans/endpoints";
import {sleep} from "../utils/fns.ts";

export type Message = {
    author: 'Michael bot' | 'You',
    AuthorImage: '🤖' | '👨‍💻',
    text: string,
    type: 'Success' | 'Error' | undefined,
    status: '🚀' | '🖥️💥' | '✅' | undefined
}
export interface ChatActions{
    onNewMessage: (message: Message) => void;
}
export class Chat {

    messages: Message[]
    private instance: string | undefined;
    private listener: ChatActions | undefined;

    constructor() {
        this.messages = []
    }
    setListener(sub:ChatActions){
       this.listener = sub
    }

    async send(text: string) {
        if (!this.instance) {
            await this.initInstance()
        }
        const currentMessage: Message = {
            author: 'You',
            AuthorImage: '👨‍💻',
            text,
            type: undefined,
            status: '🚀'
        }
        this.pushMessage(currentMessage)

        const messageRes = await this.sendMessage(text);
        currentMessage.status = '✅'
        this.pushMessage(messageRes);
    }

    lastMessage(): Message | undefined {
        return this.messages.at(-1)
    }

    private async tempMessage(): Promise<Message> {
        await sleep(100)
        return {
            author: 'Michael bot',
            AuthorImage: '🤖',
            text: '...',
            type: 'Error',
            status: '🖥️💥'
        }

    }


    private async sendMessage(text: string): Promise<Message> {
        const params = {query: text,chat: this.instance}
        try {
            const res: string = await Http.post(APIS.QA, params)
            return {
                author: 'Michael bot',
                AuthorImage: '🤖',
                text: res,
                type: undefined,
                status: undefined
            }

        } catch (e) {
            return this.getErrorMessage()
        }
    }

    private async initInstance() {

        try {
            this.pushMessage({
                    author: 'Michael bot',
                    AuthorImage: '🤖',
                    text: 'Iniciando...⏳',
                    type: undefined,
                    status: undefined
                }
            );
            this.instance = await Http.get(APIS.NEW)
            this.pushMessage({
                author: 'Michael bot',
                AuthorImage: '🤖',
                text: 'Hola!',
                type: undefined,
                status: undefined
            })

        } catch (e) {
            return this.getErrorMessage()
        }
    }

    private getErrorMessage(): Message {
        return {
            author: 'Michael bot',
            AuthorImage: '🤖',
            text: '...',
            type: 'Error',
            status: '🖥️💥'
        }
    }
    private pushMessage(message:Message){
        this.messages.push(message);
        this.listener?.onNewMessage(message)
    }
}
