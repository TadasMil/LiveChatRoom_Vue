<template>
  <button type="button" v-bind="$attrs">{{name}}</button>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>

<style>

</style>