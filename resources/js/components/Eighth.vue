<script>
export default {
    name: "Eighth"
}
</script>

<template>
    <v-container style="text-align: center;" class="container">
        <v-row>
            <v-col cols="12">
                <span class="big-span">Бізге қосылыңыз</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <span class="text">Маңызды ақпаратты жіберіп алмау үшін біздің әлеуметтік желілерге жазылыңыз</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-btn href="https://www.youtube.com/@user-pd5qr4wd8t" icon="mdi-youtube">
                </v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn href="https://www.instagram.com/aziza_srailkyzy?igsh=eTQxdWk1ZjlybnNz" icon="mdi-instagram">
                </v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn icon="mdi-whatsapp">
                </v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn icon="mdi-phone">
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-row>
        <img src="/images/volna2.svg" alt="">
    </v-row>

</template>

<style scoped>
.big-span {
    font-weight: bold;
    font-size: 4rem;
    color: #253366
}

.text {
    font-size: 1.5rem;
    color: #253366
}
</style>
