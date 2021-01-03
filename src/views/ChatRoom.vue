<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from "../components/Navbar/Navbar"
import NewChatForm from "../components/ChatForm/NewChatForm"
import ChatWindow from "../components/ChatForm/ChatWindow"
import getUser from "../composables/getUser"

export default {
  components: { Navbar, NewChatForm, ChatWindow },

  setup() {
    const {user} = getUser();
    const router = useRouter();

    watch(user, () => {
      if(!user.value){
        router.push({name: "Welcome"})
      }
    })
  }
}
</script>

<style>

</style>