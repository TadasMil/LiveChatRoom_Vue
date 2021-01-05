<template>
  <div class="chat-window">
      <div v-if="error">
          {{ error }}
      </div>
      <div class="messages-block" ref="messagesBlock">
        <div class="messages" v-if="documents">
            <div v-for="document in formattedDocuments" :key="document.id" class="single-message">
                <span class="created-at">{{ document.createdAt }}</span>
                <div class="name-message-block">
                    <div class="name-active-block">
                        <span class="name">{{ document.name }}:</span>
                    </div>
                    <span class="message">{{ document.message }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <span>Nėra pranešimų</span>
        </div>
      </div>
  </div>
</template>

<script>
import getMessagesCollection from "../../composables/getMessagesCollection"
import { formatDistanceToNow } from "date-fns"
import { computed, onMounted, onUpdated, ref } from 'vue';

export default {
    setup() {
        const { error, documents } = getMessagesCollection('messages');

        const formattedDocuments = computed(() => {
            if(documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())

                    return { ...doc, createdAt: time}
                })
            }
        })

        const messagesBlock = ref(null);

        onUpdated(() => {
            messagesBlock.value.scrollTop = messagesBlock.value.scrollHeight;
        })

        return { error, documents, formattedDocuments, messagesBlock }
    }
}
</script>

<style>
    .chat-window{
        background: #f4f4f4;
        padding: 30px 20px;
    }


    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }

    .name {
        font-weight: bold;
        margin-right: 6px;
    }

    .messages-block{
        width: 100%;
        overflow: auto;
        max-height: 300px;
    }

    .messages {
        display: inline-flex;
        flex-direction: column;
    }

    .single-message {
        margin: 10px 0;
        display: inline;
        position: relative;
    }

    .name-message-block{
        display: flex;
    }

    .name-active-block{
        display: flex;
    }
</style>