<template>
  <div class="admin-panel">
      <div v-if="users">
          <div v-if="docsI">
            <DeleteMessages />
          </div>
            <h3>Vartotojai:</h3>
            <div class="users-list">
                <div class="single-user" v-for="user in users" :key="user.id">
                    <SingleUser :userInfo="user"/>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import getCollection from "../../composables/getCollection"
import SingleUser from "./SingleUser/SingleUser"
import DeleteMessages from "../AdminPanel/DeleteMessages/DeleteMessages"
import getMessagesCollection from '../../composables/getMessagesCollection';
import {projectAuth} from "../../firebase/config"

export default {
    props: ['users'],
    components: {
        SingleUser,
        DeleteMessages,
    },

    setup() {
        const { error, documents } = getCollection('messages');

        const docsI = computed(() => {
            if(documents.value?.length){
                return true;
            } else {
                return false;
            }
        })

        return { docsI };
    }
}
</script>

<style>
    .admin-panel{
        padding: 20px 20px;
    }

    .users-list{
        overflow: auto;
        max-height: 300px;
    }

</style>