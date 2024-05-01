<script>
export default {
    name: "Third"
}
</script>

<template>
    <v-row style="transform: scaleY(-1);">
        <img src="/images/volna.svg"  alt="" style="transform: translateY(90px);">
    </v-row>
    <v-container class="container">
        <v-row><img class="img-1" src="/images/image.svg" alt="" style=" max-width: 100%;"></v-row>
    </v-container>
</template>

<style scoped>
.container{
    margin-bottom: 10rem;
}
.img-1{
    margin: 0 auto;
}
</style>
