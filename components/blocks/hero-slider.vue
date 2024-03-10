<template>
    <section class="slider">
        <div class="container">
            <div class="slider-main">
                <swiper class="swiper swiper-container" :options="sliderOptions">
                    <swiper-slide class="swiper-slide" v-for="(item, i) in slides" :key="'slides-' + i">
                        <nuxt-link :to="item.link">
                            <NuxtImg
                            class="desktop"
                                v-if="item.img"
                                :src="item.img"
                                alt=""
                                loading="lazy"
                            />
                            <NuxtImg
                              class="mobile"
                                v-if="item.mobile"
                                :src="item.mobile"
                                alt=""
                                loading="lazy"
                            />
                        </nuxt-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        props: ['slides'],
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                sliderOptions: {
                    speed: 700,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.slider {
    .slider-main {
        height: 42rem;
        border-radius: 1rem;
        overflow: hidden;
    }

    .swiper-container {
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
}

.mobile {
  display: none;
  @include bp($point_2) {
    display: block;
  }
}
.desktop {
  display: block;
  @include bp($point_2) {
    display: none;
  }
}

</style>
