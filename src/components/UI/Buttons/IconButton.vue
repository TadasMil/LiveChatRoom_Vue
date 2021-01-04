<template>
  <button type="button" v-bind="$attrs"><Icon :icon="icon" /></button>
</template>

<script>

import Icon from "../../../assets/Icon/Icon"

export default {
    props: ['icon'],
    components: {
        Icon
    }
}
</script>

<style>

</style>