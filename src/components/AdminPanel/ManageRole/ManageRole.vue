<template>
  <div class="manage-role">
      <form>
        <h5>Pakeisti vartotojo rolę:</h5>
        <select v-model="role">
            <option value="User">Vartotojas</option>
            <option value="Admin">Administratorius</option>
        </select>
      </form>
    <p>*Tai suteiks vartotojui daugiau privilegijų</p>
  </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
export default {

    setup() {
        const role = ref('');

        onUpdated(() => {
            console.log(role)
        })

        return { role }
    }
}
</script>

<style scoped>
    .manage-role{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #000;
        margin-top: 10px;
    }

    .manage-role p{
        margin-top: 5px;
        font-size: 12px;
    }

    form {
        display: flex;
        margin-top: 5px;
    }

    form h5{
        font-size: 15px;
        margin-right: 10px;   
    }
</style>