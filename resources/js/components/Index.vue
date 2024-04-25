<script>
import First from "./First.vue";
import Second from "./Second.vue";
import Third from "./Third.vue";

export default {
    name: "Index",
    components: {First, Second, Third}
}
</script>

<template>
    <v-row>
        <img class="top" src="/images/top.svg" alt="" style="transform: scaleY(-1);">
    </v-row>
    <v-container>
        <First></First>
    </v-container>
    <v-row>
        <img src="/images/volna.svg" alt="">
    </v-row>
    <Second></Second>
    <Third></Third>
</template>

<style scoped>
html {
    background: #F4F4F2;
}

</style>
