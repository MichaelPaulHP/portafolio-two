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

export class Chat {

    messages: Message[]

    constructor() {
        this.messages = []
    }

    async send(text: string) {
        const currentMessage : Message =  {
            author: 'You',
            AuthorImage:'👨‍💻',
            text,
            type: undefined,
            status:'🚀'
        }
        this.messages.push(currentMessage)

        const messageRes = await this.sendMessage(text);
        currentMessage.status = '✅'
        this.messages.push(messageRes);
    }
    lastMessage():Message | undefined {
        return this.messages.at(-1)
    }

    private async tempMessage():Promise<Message>{
        await sleep(100)
        return {
            author: 'Michael bot',
            AuthorImage:'🤖',
            text: '...',
            type: 'Error',
            status: '🖥️💥'
        }

    }


    private async sendMessage(text: string):Promise<Message> {
        const params =  { query: text }
        try {
            const res: string = await Http.post(APIS.QA, params)
            return {
                author: 'Michael bot',
                AuthorImage:'🤖',
                text: res,
                type: undefined,
                status: undefined
            }

        } catch (e) {
            return {
                author: 'Michael bot',
                AuthorImage:'🤖',
                text: '...',
                type: 'Error',
                status: '🖥️💥'
            }


        }
    }
}
