<template>
  <div class="container">
    <div class=".chat-window">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
    </div>
    <div v-if="isAdmin">
      <AdminPanel :users="documents"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from "../components/Navbar/Navbar"
import NewChatForm from "../components/ChatForm/NewChatForm"
import ChatWindow from "../components/ChatForm/ChatWindow"
import AdminPanel from "../components/AdminPanel/AdminPanel"
import getUser from "../composables/getUser"
import { getUserRole } from "../composables/getUserRole"
import getCollection from '../composables/getCollection';

export default {
  components: { Navbar, NewChatForm, ChatWindow, AdminPanel },

  setup() {
    const { user } = getUser();
    const router = useRouter();
    
    const { error, documents } = getCollection('users');
    const { isAdmin } = getUserRole(documents, user);

    watch(user, () => {
      if(!user.value){
        router.push({ name: "Welcome" })
      }
    })

    return { documents, isAdmin }
  }
}
</script>

<style>

</style>