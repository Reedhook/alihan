<script>
import First from "./First.vue";
import Second from "./Second.vue";
import Third from "./Third.vue";
import Fourth from "./Fourth.vue";
import Fifth from "./Fifth.vue";
import Sixth from "./Sixth.vue";
import Seventh from "./Seventh.vue";

export default {
    name: "Index",
    components: {First, Second, Third, Fourth, Fifth, Sixth, Seventh}
}
</script>

<template>
    <v-row>
        <img class="top" src="/images/top.svg" alt="" style="transform: scaleY(-1);">
    </v-row>
    <First></First>
    <v-row>
        <img src="/images/volna.svg" alt="">
    </v-row>
    <Second></Second>
    <Third></Third>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Sixth></Sixth>
    <Seventh></Seventh>
</template>

<style scoped>
.back {
    display: flex;
    justify-content: center;
    background-color: #F7E8DD;
}

</style>
