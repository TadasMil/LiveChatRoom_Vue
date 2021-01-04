<template>
  <div class="admin-panel">
      <div v-if="users">
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
import { computed, onMounted, onUpdated, ref } from 'vue';
import getCollection from "../../composables/getCollection"
import SingleUser from "./SingleUser/SingleUser"

export default {
    props: ['users'],
    components: {
        SingleUser,
    },
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