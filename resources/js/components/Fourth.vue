<script>
export default {
    name: "Fourth"
}
</script>

<template>
    <v-container class="container">
        <v-row>
            <span class="title">Ең маңыздысы туралы</span>
        </v-row>
        <v-row>
            <v-col cols="5">
                <div>
                    <span class="text">Баланың өміріндегі ең тиімді уақытты қалай жіберіп алмау керектігін білу үшін Біз сіздің балаңыздың өсуіне көмектесетін әлемдік нейрофизиологтар мен педиатрлар, логопедтер және басқа мамандар жасаған практикалық әдістерді дайындадық:</span>
                </div>
                <div style="margin-top: 1rem; margin-bottom: 1rem">
                    <ul>
                        <li class="text">бақытты</li>
                        <li class="text">сенімді</li>
                        <li class="text">ақылды</li>
                        <li class="text">дербес</li>
                        <li class="text">үйлесімді тұлға</li>
                    </ul>
                </div>
                <div>
                    <span class="text">Балалық шақ бақытты болуы керек! Ата-ана болу комфортты болуы керек!</span>
                </div>
                <div style="margin-top: 1rem;">
                    <span class="text"><strong>Осы сұраққа тереңірек үңілсек.</strong></span>
                </div>
            </v-col>
            <v-col cols="7">
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/vrem9.png" alt="">
                        </div>
                        <span class="text"><b>Өмірдің</b> алғашқы <b>6</b> жылы <b>өте маңызды.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-charity.svg" alt="">
                        </div>
                        <span class="text">Біз баланың дамуына негіз қалаймыз.</span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-brain.svg" alt="">
                        </div>
                        <span class="text"><b>Туғаннан 6 жасқа дейін</b> баланың миының көп бөлігі <b>дамиды, сезім мүшелері дамиды, рефлекстер біріктіріледі.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-baby-footprint.svg" alt="">
                        </div>
                        <span class="text">Егер осы кезеңде <b>вестибулярлық аппарат, сенсорлық дағдылар, баланың қозғалғыштығы</b> дұрыс дамыса, онда оның <b>потенциалы бірнеше есе артады.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-course-assign.svg" alt="">
                        </div>
                        <p class="text">Бала оңай үйренеді, өзіне сенімді және бақытты адам болады.</p>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.container{
    margin-bottom: 8rem;
}
.icons {
    margin-top: 2rem
}

.icons .text {
    margin: auto 1rem
}

.title {
    color: #253366;
}
.image-text-container {
    display: flex;
    align-items: center; /* Выравнивание по вертикали */
}

img {
    height: 40px;
    width: 40px;
    margin: 15px;
}
.icon{
    border-radius: 50%;
    background: #F7E8DD;
}
</style>
