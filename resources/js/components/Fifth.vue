<script>
export default {
    name: "Fifth"
}
</script>

<template>
    <v-row style="margin-top: 1rem">
        <img src="/images/volna.svg" alt="">
    </v-row>
    <div class="back">
        <v-container>
            <v-row>
                <v-col style="text-align: center;">
                    <span class="bold-large-span">Баланың өміріндегі ең қымбат уақытты жіберіп алмау үшін әр ата-ана үшін нені түсіну керек?</span>
                </v-col>
            </v-row>
            <v-row>
                <div class="text-image">
                    <img src="/images/brain.png" alt="">
                    <span class="bold-span text-container">УАҚЫТ ҚАЙТАРЫЛМАЙДЫ! <br>Өмірдің бірінші жылында баланың миының 60-80% - ы қалыптасады, оны кейінгі өмір бойы пайдаланады, баланың өмірдегі барлық кейінгі нәтижелері тәуелді болатын негіздер қаланады.</span>
                </div>
            </v-row>
            <v-row>
                <v-col cols="6" style="text-align: center;">
                    <span class="span-text" >
                        Бала әлемді физикалық тәжірибе арқылы біледі, ал өмірдің алғашқы жылдарында ұтқырлық қаншалықты дұрыс болса-бала соғұрлым жақсы және тез дамиды, оның ақыл-ойы соғұрлым күшті дамиды, нәресте соғұрлым ақылды болады
                    </span>
                </v-col>
                <v-col cols="6" style="text-align: center;">
                    <span class="span-text" >
                        Баланың моторлық және сенсорлық тәжірибесі неғұрлым ерте басталса, соғұрлым ол дамиды. Оған үйрену оңайырақ болады және оқу процесі оған көбірек рахат әкеледі.
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-row style="transform: scaleY(-1);">
        <img src="/images/volna.svg" alt="">
    </v-row>
</template>

<style scoped>
.bold-large-span {
    display: inline-block;
    font-weight: bold;
    font-size: 4rem;
    color: #FF4D30;
    margin: 0 auto;
}

.back {
    background: #F7E8DD;
}

.bold-span {
    font-size: 1.5rem;
    color: #253366;
    font-weight: bold;
}

.span-text {
    margin: 0 auto;
    font-size: 1.3rem;
    color: #253366;
}

.text-image {
    display: flex;
    align-items: flex-start; /* Выравнивание по началу строки */
}
.text-container {
    display: flex;
    flex-direction: column;
}
</style>
