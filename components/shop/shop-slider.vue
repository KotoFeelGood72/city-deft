<template>
    <div class="shop-slider__main">
        <swiper v-if="showThumbs" class="shop-slider-thumb" :options="sliderOptions.thumbs" ref="thumbs" @swiper="initSlider">
            <swiper-slide v-for="(item, i) in slider" :key="'slide-thumb-' + i">
                <NuxtImg
                    v-if="item.images"
                    :src="item.images"
                    alt=""
                    loading="lazy"
                />
            </swiper-slide>
        </swiper>
        <swiper class="shop-slider" :options="sliderOptions.slider" ref="main" @swiper="initSlider">
            <swiper-slide v-for="(item, i) in slider" :key="'slide-' + i">
                <a data-fancybox="gallery" v-if="item.images" :href="item.images">
                    <NuxtImg
                        v-if="item.images"
                        :src="item.images"
                        alt=""
                        loading="lazy"
                    />
                </a>
            </swiper-slide>
        </swiper>
        <div class="slider-nav" v-if="showThumbs">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        components: { Swiper, SwiperSlide },
        props: ['slider'],
        computed: {
            showThumbs() {
                return this.slider && this.slider.length > 1;
            }
        },
        data() {
            return {
                sliderOptions: {
                    thumbs: {
                        spaceBetween: 11,
                        slidesPerView: 4,
                        freeMode: false,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        watchOverflow: true,
                        speed: 700,
                        breakpoints: {
                            480: {
                                direction: "horizontal",
                                slidesPerView: 4
                            },
                            768: {
                                direction: "horizontal",
                                slidesPerView: 4
                            },
                            1200: {
                                direction: "vertical",
                                slidesPerView: 4
                            }
                        },
                    },
                    slider: {
                        direction: "horizontal",
                        spaceBetween: 10,
                        speed: 700,
                        loop: true,
                        keyboard: {
                            enabled: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                }
            }
        },
        methods: {
            initSlider() {
                if (this.$refs.thumbs.$swiper && this.$refs.main.$swiper) {
                    this.$refs.main.$swiper.thumbs.swiper = this.$refs.thumbs.$swiper;
                    this.$refs.main.$swiper.thumbs.init();
                    this.$refs.main.$swiper.navigation.init();
                    this.$refs.main.$swiper.navigation.update();
                    this.$refs.main.$swiper.update();
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                if(this.showThumbs) {
                    this.initSlider();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>

.shop-slider__main{
    @include flex-start;
    height: 51.9rem;
    max-width: 77%;
    margin-right: 2rem;
    position: relative;

    @include bp($point_2) {
        flex-direction: column;
        max-width: 50%;
        // overflow: hidden;
        align-items: flex-start;
    }
    @include bp($point_4) {
        max-width: 100%;
        margin: 0 0 2rem 0;
    }
    // flex-grow: 1;
    // max-width: 100%;

    .swiper-container {
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.shop-slider-thumb {
    height: 100%;
    min-width: 12.2rem;
    margin-right: 1.5rem;
    .swiper-slide {
        border-radius: 1rem;
    }
    @include bp($point_2) {
        order: 2;
        width: 100%;
        // min-width: 100%;
        margin-right: 0;
        max-height: 10rem;
        overflow: hidden;
    }
}



.shop-slider {
    border-radius: 1rem;
    max-width: 100%;
    width: 100%;
    flex-grow: 1;
    position: relative;
    @include bp($point_2) {
        margin-bottom: 2rem;
    }
    a {
        @include flex-center;
        width: 100%;
        height: 100%;
        img {
            border-radius: 1rem;
        }
    }
}

// .slider__wrapper {
//     position: relative;
//     width: 100%;
//     max-width: 100%;
// }

.slider-nav {
    position: absolute;
    z-index: 999;
    width: 100%;
    top: 45%;
    left: auto;
    right: 2rem;
    transform: translateY(-50%);
    max-width: 77%;
    color: $white;
    pointer-events: none;
    
    @include bp($point_4) {
        max-width: 100%;
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
        top: 37%;
    }
}

.swiper-button-prev:after, .swiper-button-next:after {
    color: $white;
    font-size: 1.8rem;
}

.swiper-button-prev,
.swiper-button-next {
    @include flex-center;
    width: 5rem;
    height: 5rem;
    background-color: #00000083;
    border-radius: 100%;
    transition: all .3s ease;
    pointer-events: all;
    &:hover {
        background-color: #000000d5;

    }
}



</style>