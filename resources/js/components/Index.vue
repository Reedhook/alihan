<script>
import First from "./First.vue";
import Second from "./Second.vue";
import Third from "./Third.vue";
import Fourth from "./Fourth.vue";
import Fifth from "./Fifth.vue";
import Sixth from "./Sixth.vue";
import Seventh from "./Seventh.vue";
import Eighth from "./Eighth.vue";
export default {
    name: "Index",
    components: {First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth}
}
</script>

<template>
    <First></First>
    <Second></Second>
    <v-row style="transform: scaleY(-1);">
        <img src="/images/volna.svg"  alt="" style="transform: translateY(90px);">
    </v-row>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Sixth></Sixth>
    <Seventh></Seventh>
    <Eighth></Eighth>
</template>

<style scoped>

</style>
