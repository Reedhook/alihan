<script>
export default {
    name: "Fifth"
}
</script>

<template>
    <v-row style="margin-top: 1rem">
        <img src="/images/volna.svg" style="transform: translateY(90px);" alt="">

    </v-row>
    <div class="back">
        <v-container class="container">
            <v-row style="margin-bottom: 2rem">
                <v-col style="text-align: center;">
                    <span class="title">Баланың өміріндегі ең қымбат уақытты жіберіп алмау үшін әр ата-ана нені түсіну керек?</span>
                </v-col>
            </v-row>
            <v-row>
                <v-row style="margin-bottom: 1rem">
                    <v-col cols="5">
                        <img src="/images/brain.png" alt="">
                    </v-col>
                    <v-col cols="7">
                        <v-row>
                            <span class="bold-little-text">УАҚЫТ ҚАЙТАРЫЛМАЙДЫ!</span>
                        </v-row>
                        <v-row>
                        <span class="text">
                            <b>Өмірдің бірінші жылында</b> баланың миының <b>60-80% - ы қалыптасады</b>, оны кейінгі өмір бойы пайдаланады, баланың өмірдегі барлық <b>кейінгі нәтижелері</b> тәуелді болатын <b>негіздер қаланады.</b>
                        </span>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6" style="text-align: center;">
                    <span class="text">
                        <b>Бала</b> әлемді <b>физикалық тәжірибе арқылы таниды</b>, ал өмірдің алғашқы жылдарында <b>ұтқырлық</b> қаншалықты дұрыс болса-бала <b>соғұрлым жақсы және тез дамиды</b>, оның ақыл-ойы <b>соғұрлым күшті дамиды</b>, нәресте <b>соғұрлым ақылды болады!</b>
                    </span>
                    </v-col>
                    <v-col cols="6" style="text-align: center;">
                    <span class="text">
                        Баланың моторлық және сенсорлық тәжірибесі <b>неғұрлым ерте басталса, соғұрлым ол дамиды.</b> Оған <b>үйрену</b> оңайырақ болады және <b>оқу процесі</b> оған көбірек рахат әкеледі.
                    </span>
                    </v-col>
                </v-row>
            </v-row>

        </v-container>
    </div>
    <v-row style="transform: scaleY(-1);">
        <img src="/images/volna.svg" style="transform: translateY(90px);" alt="">
    </v-row>
</template>

<style scoped>
.title {
    color: #FF4D30;
}

.back {
    background: #F7E8DD;
}

.text {
    font-size: 1.1rem;
}

.bold-little-text {
    font-size: 1.7rem;
    margin-bottom: 2rem;
}
</style>
