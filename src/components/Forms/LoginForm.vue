<template>
  <form @submit.prevent="handleSubmitForm" class="login-signup">
      <input type="email" placeholder="E-paštas" v-model="email" required>
      <input type="password" placeholder="Slaptažodis" v-model="password" required>
      <div class="error">{{error}}</div>
      <button type="submit" class="login">Prisijungti</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from "../../composables/useLogin"
import{projectAuth} from "../../firebase/config"

export default {
    setup(props, context){
        const email = ref('')
        const password = ref('')

        const {error, login} = useLogin();

        const handleSubmitForm = async () => {
            await login(email.value, password.value)

            if(!error.value){
                context.emit('login')
            }
        }

        return { email, password, handleSubmitForm, error }
    }
}
</script>

<style>

</style>