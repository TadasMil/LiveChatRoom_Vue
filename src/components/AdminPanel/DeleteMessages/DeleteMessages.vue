<template>
    <Button name="Ištrinti žinutes" class="delete-button" @click="onClickDeleteMessages"/>
</template>

<script>

import Button from "../../UI/Buttons/Button"
import { deleteMessages } from "../../../composables/deleteMessages"
import { onUpdated, ref } from 'vue'

export default {
    components: {
        Button
    },

    setup() {
        const onClickDeleteMessages = async () => {
            await deleteMessages("messages");
        }

        return {onClickDeleteMessages}
    }
}
</script>

<style>
    .delete-button{ 
        margin: 10px 0;
    }
</style>