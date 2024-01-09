<template>
    <div class="shop-slider__main">
        <swiper v-if="showThumbs" class="shop-slider-thumb" :options="sliderOptions.thumbs" ref="thumbs" @swiper="initSlider">
            <swiper-slide v-for="(item, i) in slider" :key="'slide-thumb-' + i">
                <NuxtImg 
                    :src="item.images"
                    alt=""
                    loading="lazy"
                />
            </swiper-slide>
        </swiper>
        <swiper class="shop-slider" :options="sliderOptions.slider" ref="main" @swiper="initSlider">
            <swiper-slide v-for="(item, i) in slider" :key="'slide-' + i">
                <a data-fancybox="gallery" :href="item.images">
                    <NuxtImg 
                        :src="item.images"
                        alt=""
                        loading="lazy"
                    />
                </a>
            </swiper-slide>
        </swiper>
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
                        keyboard: {
                            enabled: true,
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

    @include bp($point_2) {
        flex-direction: column;
        max-width: 50%;
        // overflow: hidden;
        align-items: flex-start;
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




</style>