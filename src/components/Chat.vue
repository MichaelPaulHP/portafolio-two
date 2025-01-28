<script setup lang="ts">

import {reactive, ref} from "vue";
import {Chat, type ChatActions, type Message} from "../models/Chat.ts";
import {sleep} from "../utils/fns.ts";

const msgInput = ref('')

const obs:ChatActions = {
  onNewMessage:(message:Message)=>{
    scrollToBot()
    msgInput.value = ''
  }
}
const chat = reactive<Chat>(new Chat())
chat.setListener(obs)

const isMessagesVisible = ref(false)
const onEnter = () => {

  const text = msgInput.value
  if (!text || !text.length || text.length > 70) {
    return
  }
  const prevMessage = chat.lastMessage()
  if (prevMessage && prevMessage.author === 'You') {
    return;
  }

  chat.send(text)
  isMessagesVisible.value = true
}

const scrollToBot = async  () => {
  await sleep(500)
  document.querySelector('#last')?.scrollIntoView({
    behavior: 'smooth'
  });
}

const onClose = () => {
  isMessagesVisible.value = !isMessagesVisible.value
}

</script>

<template>
  <div class="d-flex flex-col  ">
    <div v-if="isMessagesVisible" class="flex justify-end  ">
      <span class="cursor-pointer" @click="onClose">❌</span>
    </div>
    <div
        :class="isMessagesVisible? 'block':'hidden'"
        class="overflow-x-hidden overflow-y-auto max-h-[50vh] scroll-width pb-2">
      <div class="flex flex-col gap-3.5 ">
        <div v-for="message in chat.messages" class="flex items-start gap-2">
          <div class="w-8 h-8 rounded-full flex items-center justify-center ">
            <span class="m-auto">{{ message.AuthorImage }}</span>
          </div>
          <div class="flex flex-col w-full  leading-1.5">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold ">{{ message.author }}</span>
              <span v-if="message.status" class="text-[0.6rem]">{{ message.status }}</span>
              <!--            <span class="text-sm font-normal text-[&#45;&#45;gray-50] dark:text-gray-400">00:00</span>-->
            </div>
            <p class="text-sm font-normal py-1" :class="message.type==='Error'? 'text-red-600':''">
              {{ message.text }}
            </p>

          </div>
        </div>
      </div>
      <div id="last"></div>

    </div>

    <div class="flex   gap-3">
      <div class="flex-1">
        <label for="small-input" class="block text-sm font-medium  ">

          <input @keyup.enter="onEnter" autocomplete="off" placeholder="Pregúntame algo" v-model="msgInput" type="text"
                 id="small-input"
                 class="w-full bg-[--gray-999]  border border-[--accent-light] text-[--gray-50]   p-2  ">
        </label>
      </div>
      <button class="  inline-flex items-center " @click="onEnter" type="submit">
        <span>➡️</span>
      </button>


    </div>
  </div>


</template>

<style scoped>
.scroll-width {
  scrollbar-width: none
}
</style>
