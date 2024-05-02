<script>
export default {
    name: "Second"
}
</script>

<template>
    <div class="back">
        <v-container class="container">
            <v-row style="margin-bottom: 3rem">
                <span class="title">Сондықтан мұнда сіз біле аласыз:</span>
            </v-row>
            <v-row>
                <v-col cols="4" class="first">
                    <img src="/images/810-png.svg" style="margin-bottom: 2rem" alt=""><br>
                    <span class="text">болашақта <strong>оңай</strong> және <strong>сәтті</strong> оқуға әсер ететін балалар <strong>денесінің, мидың</strong> және <strong>сезім мүшелерінің</strong> қалыптасу ерекшеліктері туралы</span>
                </v-col>
                <v-col cols="4" class="second">
                    <img src="/images/school-png.svg" style="margin-bottom: 2rem" alt=""><br>
                    <span class="text">балаңыздың табиғи әлеуеті мен туа біткен <strong>талантын</strong> қалай <strong>ашуға</strong> болатынын түсініңіз</span>
                </v-col>
                <v-col cols="4" class="third">
                    <img src="/images/12-png.svg" style="margin-bottom: 2rem"  alt=""><br>
                    <span class="text">сіз өзіңіздің <strong>аналық кезеңіңіздің қалай жеңіл, көңілді</strong> және <strong>жайлы</strong> етуді үйренесіз, ал баланың <strong>балалық шағы бақытты, көңілді және жарқын</strong> болуын</span>
                </v-col>
            </v-row>

        </v-container>
    </div>

</template>

<style scoped>
.title {
    color: #FF4D30;
}
.back {
    display: flex;
    justify-content: center;
    background-color: #F7E8DD;
}
img{
    max-width: 25%;
}
.first, .second, .third {
    text-align: center;
    margin: 0 auto;
}
</style>
