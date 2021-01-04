<template>
  <div class="manage-user">
    <div class="user">
      <div>
            <div class="user-name-status">
                <h4>Vardas: <span>{{userInfo.name}}</span></h4>
                <span class="active" v-if="isActive">●</span>
                <span class=unactive v-else>●</span>
            </div>
            <h4>Pareigos: <span>{{userRole}}</span></h4>
      </div>
        <IconButton type="button" @click="onSettingsClick" icon="settings" class="button"/>
    </div>
    <div v-if="showSettings">
        <ManageRole />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'

import IconButton from "../../UI/Buttons/IconButton"
import ManageRole from "../../AdminPanel/ManageRole/ManageRole"

export default {
    props: {
        userInfo: Object
    },

    components: {
        IconButton,
        ManageRole,
    },

    setup(props, context) {
        
        const showSettings = ref(false);
        const isActive = ref(false);

        const onSettingsClick = () => {
            showSettings.value = !showSettings.value;
        }  

        const userRole = computed(() => {
            if(props.userInfo?.role === "Admin"){
                return "Administratorius"
            }

            return "Vartotojas"
        })

        return { onSettingsClick, showSettings, userRole, isActive }
    }
}
</script>

<style>
    .manage-user{
        margin: 10px 0;
        border-radius: 20px;
        background: #ccc;
        padding: 10px 10px;
    }

    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user h4{
        margin-bottom: 5px;
    }

    .user h4 span{
        font-weight: normal;
    }

    .user p{
        font-size: 15px;
        margin-top: 10px;
    }

    .user-name-status {
        display: flex;
    }

    .button{ 
        background: transparent;
        padding: 0;
    }

    .button:hover{
        background: transparent;
    }

    .button svg{
        height: 20px;
        width: 20px;
    }
</style>