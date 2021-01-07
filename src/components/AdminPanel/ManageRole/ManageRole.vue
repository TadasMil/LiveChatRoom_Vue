<template>
    <div id="manage-user-role">
        <div class="manage-role">
            <form>
                <h5>Pakeisti vartotojo rolę:</h5>
                <select v-model="role" class="select-user-role">
                    <option value="User">Vartotojas</option>
                    <option value="Admin">Administratorius</option>
                </select>
            </form>
            <p>*Tai suteiks vartotojui daugiau privilegijų</p>
        </div>
      <Button name="Išsaugoti pakeitimus" class="save-new-role" @click="onChangeRole"/>
    </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
import Button from "../../UI/Buttons/Button";
import {editUserRole} from "../../../composables/EditUserRole";

export default {
    props: ['userId'],

    components: {
        Button,
    },

    setup(props) {
        const role = ref('');

        const onChangeRole = async () => {
            await editUserRole('users', props.userId, role.value);
        }

        return { role, onChangeRole }
    }
}
</script>

<style scoped>

    .manage-role{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #000;
        margin-top: 20px;
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

    .save-new-role{
        margin: 10px 0;
    }

</style>