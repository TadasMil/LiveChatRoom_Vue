<template>
    <span class="active" v-if="userActivity">●</span>
    <span class=unactive v-else>●</span>
</template>

<script>
import { computed } from 'vue';
export default {

    props: {
        activeState: Boolean
    },

    setup(props){
        const userActivity = computed(() => {
            if (props.activeState) {
                return true;
            }

                return false;
            });

        return { userActivity }
    }
}
</script>

<style>

</style>