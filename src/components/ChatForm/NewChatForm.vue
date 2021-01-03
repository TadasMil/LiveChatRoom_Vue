<template>
  <form action="" @submit="handleSubmitMessage">
      <textarea
        placeholder="Žinutė.."
        v-model="message"
        @keypress.enter.prevent="handleSubmitMessage"
      ></textarea>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { timestamp } from '../../firebase/config';
import getUser from "../../composables/getUser";
import useCollection from "../../composables/useCollection";


export default {
    setup() {
        const message = ref('');
        const { user } = getUser();
        const { error, addDocument } = useCollection('messages');

        const handleSubmitMessage = async () => {

            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

            await addDocument(chat);
            if(!error.value) {
                message.value = "";
            }
        }

        return { message, handleSubmitMessage, error }
    }
}
</script>

<style scoped>

    form {
        margin: 10px;
    }

    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }

</style>