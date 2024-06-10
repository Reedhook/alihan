<script>
export default {
    name: "First"
}
</script>

<template>
    <v-row style="transform: scaleY(-1);">
        <img class="top" src="/images/top.svg" alt="">
    </v-row>
    <v-container class="container">
        <v-row>
            <v-col cols="7">
                <v-row>
                    <v-col cols="12">
                        <h2>
                            <span class="bold-text">Құрметті<br>ата-аналар!</span>
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
            <span class="bold-little-text">
                0-6 жастағы баланың жан-жақты және үйлесімді дамуы туралы сайтқа қош келдіңіз
            </span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span class="text">Біз әрбір қамқор ана баласына ең жақсысын бергісі келетінін білеміз!</span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <v-row>
        <img src="/images/volna.svg" style="transform: translateY(90px);" alt="">
    </v-row>
</template>

<style scoped>
.container {
    margin-bottom: 6rem;
}
</style>
