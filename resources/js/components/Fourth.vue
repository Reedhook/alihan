<script>
export default {
    name: "Fourth"
}
</script>

<template>
    <v-container>
        <v-row>
            <span class="bold-large-span">Ең маңыздысы туралы</span>
        </v-row>
        <v-row>
            <v-col cols="5">
                <div>
                    <span class="span-text">Баланың өміріндегі ең тиімді уақытты қалай жіберіп алмау керектігін білу үшін Біз сіздің балаңыздың өсуіне көмектесетін әлемдік нейрофизиологтар мен педиатрлар, логопедтер және басқа мамандар жасаған практикалық әдістерді дайындадық:</span>
                </div>
                <div style="margin-top: 1rem; margin-bottom: 1rem">
                    <ul>
                        <li class="span-text">бақытты</li>
                        <li class="span-text">сенімді</li>
                        <li class="span-text">ақылды</li>
                        <li class="span-text">дербес</li>
                        <li class="span-text">үйлесімді тұлға</li>
                    </ul>
                </div>
                <div>
                    <span class="span-text">Балалық шақ бақытты болуы керек! Ата-ана болу комфортты болуы керек!</span>
                </div>
                <div style="margin-top: 1rem;">
                    <span class="span-text"><strong>Осы сұраққа тереңірек үңілсек.</strong></span>
                </div>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/vrem9.png" alt="">
                        </div>
                        <span style="margin:auto 1rem " class="span-text"><b>Өмірдің</b> алғашқы <b>6</b> жылы <b>өте маңызды.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-charity.svg" alt="">
                        </div>
                        <span class="span-text">Біз баланың дамуына негіз қалаймыз.</span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-brain.svg" alt="">
                        </div>
                        <span class="span-text"><b>Туғаннан 6 жасқа дейін</b> баланың миының көп бөлігі <b>дамиды, сезім мүшелері дамиды, рефлекстер біріктіріледі.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-baby-footprint.svg" alt="">
                        </div>
                        <span class="span-text">Егер осы кезеңде <b>вестибулярлық аппарат, сенсорлық дағдылар, баланың қозғалғыштығы</b> дұрыс дамыса, онда оның <b>потенциалы бірнеше есе артады.</b></span>
                    </div>
                </v-row>
                <v-row class="icons">
                    <div class="image-text-container">
                        <div class="icon">
                            <img src="/images/icons8-course-assign.svg" alt="">
                        </div>
                        <p class="span-text">Бала оңай үйренеді, өзіне сенімді және бақытты адам болады.</p>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.icons {
    margin-top: 3rem
}

.icons .span-text {
    margin: auto 1rem
}

.bold-large-span {
    font-weight: bold;
    font-size: 4rem;
    color: #253366;
    margin: 0 auto;
}

.span-text {
    font-size: 1.2rem;
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
