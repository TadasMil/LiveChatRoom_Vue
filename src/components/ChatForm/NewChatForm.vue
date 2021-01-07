<template>
  <form action="" @submit.prevent="handleSubmitMessage">
     <div class="sent-new-message">
        <textarea
        placeholder="Žinutė.."
        v-model="message"
        @keypress.enter.prevent="handleSubmitMessage"
        ></textarea>
            <IconButton type="submit" @click="onSettingsClick" icon="send" class="button"/>
     </div>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { timestamp } from '../../firebase/config';
import getUser from "../../composables/getUser";
import useCollection from "../../composables/useCollection";
import IconButton from "../../components/UI/Buttons/IconButton"
import {encryptMessage} from "../../composables/encryption"

export default {
    components: {
        IconButton
    },

    setup() {
        const message = ref('');
        const { user } = getUser();
        const { error, addDocument } = useCollection('messages');

        const handleSubmitMessage = async () => {

            const encryptedMsg = encryptMessage(message.value).toString();

            const chat = {
                message: encryptedMsg,
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

    .sent-new-message{
        display: flex;
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