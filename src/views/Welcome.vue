<template>
  <div class="welcome container">
    <div v-if="formToggle">
    <h3>Prisijungti</h3>
        <LoginForm @login="enterChat"/>
    <h5 @click="handleFormChange">Neturi paskyros? <span>Registruokis</span></h5>
    </div>
    <div v-else>
    <h3>Registracija</h3>
        <SignupForm @signup="enterLogin"/>
    <h5 @click="handleFormChange">Turi paskyrą? <span>Prisijunk</span></h5>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/Forms/SignupForm"
import LoginForm from "../components/Forms/LoginForm"
import { ref } from 'vue'
import { useRouter } from "vue-router"

export default {
    components: {
        SignupForm,
        LoginForm
    },

    setup() {
        const formToggle = ref(true)
        const router = useRouter()

        const handleFormChange = () => {
            formToggle.value = !formToggle.value
        }

        const enterChat = () => {
            router.push({name: "Chatroom"})
        }

        const enterLogin = () => {
            formToggle.value = !formToggle.value;
        }
        
        return { formToggle, handleFormChange, enterChat, enterLogin }
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }

    .welcome h3{
        margin: 0;
    }

    .welcome form {
        width: 300px;
        margin: 0 auto 0 auto;
    }

    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }

    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 2px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }

    .welcome h5{
        margin-top: 10px;
        display: inline-block;
        padding-bottom: 3px;
        cursor: pointer;
        letter-spacing: 1px;
        font-weight: normal;
        font-size: 17px;
    }

    .welcome h5 span{
         border-bottom: 1px solid #ccc;
         font-weight: bold;
    }
</style>