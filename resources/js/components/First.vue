<script>
export default {
    name: "First"
}
</script>

<template>
    <v-container>
        <v-row class="back">
            <v-col cols="4">
                <h2>
                    <span class="bold-large-span">Құрметті<br>аналар!</span>
                </h2>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
            <span class="strong-span">
                <b></b>
                0-6 жастағы баланың жан-жақты және үйлесімді дамуы туралы сайтқа қош келдіңіз
            </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <span class="span-text">Біз әрбір қамқор ана баласына ең жақсысын бергісі келетінін білеміз!</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.bold-large-span {
    font-weight: bold;
    font-size: 4rem;
    color: #FF4D30
}
.strong-span{
    font-weight: bold;
}
.span-text, .strong-span{
    font-size: 1rem;
    color: #253366;
}
</style>
