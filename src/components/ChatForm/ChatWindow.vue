<template>
  <div class="chat-window">
      <div v-if="error">
          {{ error }}
      </div>
      <div class="messages" v-if="documents" ref="messagesBlock">
          <div v-for="document in formattedDocuments" :key="document.id" class="single-message">
              <span class="created-at">{{ document.createdAt }}</span>
              <span class="name">{{ document.name }}:</span>
              <span class="message">{{ document.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from "../../composables/getCollection"
import { formatDistanceToNow } from "date-fns"
import { computed, onMounted, onUpdated, ref } from 'vue';

export default {
    setup() {
        const { error, documents } = getCollection('messages');

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

    .single-message {
        margin: 18px 0;
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

    .messages {
        max-height: 300px;
        overflow: auto;
    }
</style>