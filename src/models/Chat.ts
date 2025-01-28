import {Http} from "../core/http";
import {APIS} from "../constans/endpoints";
import {sleep} from "../utils/fns.ts";
import {ref, type Ref} from "vue";

export type Message = {
    author: 'Michael bot' | 'You',
    AuthorImage: '🤖' | '👨‍💻',
    text: Ref<string>,
    type: 'Success' | 'Error' | undefined,
    status: '🚀' | '🖥️💥' | '✅' | undefined
}

export interface ChatActions {
    onNewMessage: (message: Message) => void;
}

export class Chat {

    messages: Message[]
    private instance: string | undefined;
    private listener: ChatActions | undefined;

    constructor() {
        this.messages = []
    }

    setListener(sub: ChatActions) {
        this.listener = sub
    }

    async send(text: string) {
        if (!this.instance) {
            this.pushMessage(this.buildBotMessage('Iniciando...⏳'));
            const initSuccess = await this.initInstance()
            if (!initSuccess) {
                this.pushMessage(this.getErrorMessage());
                return;
            }
        }
        const currentMessage: Message = {
            author: 'You',
            AuthorImage: '👨‍💻',
            text: ref(text),
            type: undefined,
            status: '🚀'
        }
        this.pushMessage(currentMessage)


        const params = {query: text, chat: this.instance}
        const startText = '...'
        const nextMessage = this.buildBotMessage(startText)
        const p = new Promise(async (resolve,reject) => {
            try {
                const generator = Http.stream(APIS.QA_STREAM, params)


                this.pushMessage(nextMessage);
                // nextMessage.text.value = ''
                for await (const data of generator) {
                    //console.log(data)
                    if (data.answer) {
                        const current = nextMessage.text.value
                        nextMessage.text.value = current === startText ? data.answer : (current + data.answer);
                    }
                    if (data.error) {
                        throw new Error(data.error);
                    }
                }
                resolve(undefined)
            }catch (e) {
                reject(e)
            }

        })
        currentMessage.status = '✅'
        await p.catch((err) => {
            nextMessage.text.value = this.getErrorMessage().status ?? '';
        })
    }

    lastMessage(): Message | undefined {
        return this.messages.at(-1)
    }

    private async tempMessage(): Promise<Message> {
        await sleep(100)
        return {
            author: 'Michael bot',
            AuthorImage: '🤖',
            text: ref('...'),
            type: 'Error',
            status: '🖥️💥'
        }

    }


    private async sendMessage(text: string): Promise<Message> {
        const params = {query: text, chat: this.instance}
        try {
            const res: string = await Http.post(APIS.QA, params)
            return {
                author: 'Michael bot',
                AuthorImage: '🤖',
                text: ref('...'),
                type: undefined,
                status: undefined
            }

        } catch (e) {
            return this.getErrorMessage()
        }
    }

    private async initInstance() {

        try {

            this.instance = await Http.get(APIS.NEW)

            return true
        } catch (e) {
            return false

        }
    }

    private getErrorMessage(): Message {
        return {
            author: 'Michael bot',
            AuthorImage: '🤖',
            text: ref('...'),
            type: 'Error',
            status: '🖥️💥'
        }
    }

    private buildBotMessage(text: string): Message {
        return {
            author: 'Michael bot',
            AuthorImage: '🤖',
            text: ref(text),
            type: undefined,
            status: undefined
        }
    }

    private pushMessage(message: Message) {
        this.messages.push(message);
        this.listener?.onNewMessage(message)
    }
}
