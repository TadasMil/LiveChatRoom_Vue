<template>
  <form @submit.prevent="handleSubmitForm">
      <input type="text" placeholder="Vardas" v-model="name" required>
      <input type="email" placeholder="E-paštas" v-model="email" required>
      <input type="password" placeholder="Slaptažodis" v-model="password" required>
      <div class="error">
          {{error}}
      </div>
      <button type="submit">Registruotis</button>
  </form>
</template>

<script>
import { onUpdated, ref } from 'vue'
import useSignup from "../../composables/useSignup"

export default {
    setup(props, context){
        const name = ref('')
        const email = ref('')
        const password = ref('')

        const { error, signup } = useSignup();

        const handleSubmitForm = async () => {
            await signup(email.value, password.value, name.value)

            if(!error.value){
                context.emit('signup')
            }
        }

        return { name, email, password, handleSubmitForm, error }
    }
}
</script>

<style>

</style>