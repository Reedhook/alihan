<script>
export default {
    name: "Second"
}
</script>

<template>
    <div class="back">
        <v-container>
            <v-row>
                <span class="bold-span">Сондықтан мұнда сіз біле аласыз:</span>
            </v-row>
            <v-row>
                <v-col cols="4" class="first">
                    <img src="/images/810-png.svg" alt=""><br>
                    <span class="span-text">болашақта <strong>оңай</strong> және <strong>сәтті</strong> оқуға әсер ететін балалар <strong>денесінің, мидың</strong> және <strong>сезім мүшелерінің</strong> қалыптасу ерекшеліктері туралы</span>
                </v-col>
                <v-col cols="4" class="second">
                    <img src="/images/school-png.svg" alt=""><br>
                    <span class="span-text">балаңыздың табиғи әлеуеті мен туа біткен <strong>талантын</strong> қалай <strong>ашуға</strong> болатынын түсініңіз</span>
                </v-col>
                <v-col cols="4" class="third">
                    <img src="/images/12-png.svg" alt=""><br>
                    <span class="span-text">сіз өзіңіздің <strong>аналық кезеңіңіздің қалай жеңіл, көңілді</strong> және <strong>жайлы</strong> етуді үйренесіз, ал баланың <strong>балалық шағы бақытты, көңілді және жарқын</strong> болуын</span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.bold-span {
    font-weight: bold;
    font-size: 4rem;
    color: #FF4D30;
    margin: 0 auto;
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
.span-text{
    font-size: 1.3rem;
    color: #253366;
}
</style>
