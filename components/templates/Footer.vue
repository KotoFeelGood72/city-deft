<template>
    <footer class="footer" v-if="data">
        <div class="container">
            <div class="footer_main">
                <div>
                    <div class="footer-col__info">
                        <div class="logo">
                            <nuxt-link to="/">
                                <NuxtImg 
                                    src="logo.png"
                                    alt=""
                                    loading="lazy"
                                />
                            </nuxt-link>
                        </div>
                        <div class="footer_info__descr">{{ data['brand-short'] }}</div>
                        <ul class="footer-social">
                            <li v-for="(item, i) in data['contacts'].social" :key="'social-footer-' + i">
                                <a target="_blank" :href="item.link">
                                    <icons v-if="item.icon" :icon="item.icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer_col__nav" v-for="(item, i) in data.navigation" :key="item + 'footer-navigation-' + i">
                    <v-col-nav :data="item"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import vColNav from '../ui-kit/v-col-nav';
    // import { mapGetters } from 'vuex'
    import icons from '../icons/icons.vue';
    export default {
        components: { vColNav, icons },
        props: ['data'],
    }
</script>

<style lang="scss" scoped>

.footer {
    background: #F7F7F7;
    @include bp($point_2) {
        font-size: 1.2rem;
    }
}

.footer_main {
    padding: 13rem 0 5rem 0;
}

.logo {
    max-width: 10rem;
    margin-bottom: 0.5rem;
    img {
        width: 100%;
        object-fit: contain;
    }
}

.footer-col__info {
    max-width: 25.8rem;
}

.footer_main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    grid-gap: 4rem;
}

.footer_info__descr {
    margin-bottom: 4rem;
}

.footer-social {
    @include flex-start;
    flex-wrap: wrap;
    margin: -2rem -2rem 0 0;
    li {
        padding: 2rem 2rem 0 0;
        a {
            color: $yellow;
            width: 3rem;
            height: 3rem;
            @include flex-center;
            svg {
                width: 100%;
                height: 100%;
                transition: all .3s ease;
            }
            &:hover {
                color: $accent;
                svg {
                    transform: rotate(25deg);
                }
            }
        }
    }
}

</style>