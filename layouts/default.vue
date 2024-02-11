<template>
    <div class="pages">
        <Header :content="data"/>
        <main class="main">
            <Nuxt/>
        </main>
        <actions v-if="isForm" :forms="isForm" :data="data"/>
        <transition name="translate">
            <modal-form v-if="getPopup('form')"/>
        </transition>
        <transition name="translate">
            <modal-burger v-if="getPopup('burger')" :modal="data"/>
        </transition>
        <Footer :data="data"/>
        <transition name="translate">
            <loader v-if="isLoading"/>
        </transition>
        <yandex/>
    </div>
</template>

<script>
    import Header from '@/components/templates/Header';
    import Footer from '@/components/templates/Footer';
    import actions from '@/components/blocks/actions';
    import modalForm from '../modal/modal-form';
    import modalBurger from '../modal/modal-burger';
    import loader from '../components/ui-kit/loader';
    import yandex from '@/components/templates/yandex'
    import { mapGetters } from 'vuex'
    export default {
        components: { Header, Footer, actions, modalForm, modalBurger, loader, yandex},
        data() {
            return {
                data: null,
                isLoading: true,
            }
        },
        computed: {
            isForm() {
                const pages = ['/', '/about', '/about/'];
                return !pages.includes(this.$route.path);
            },
            ...mapGetters(['getPopup']),
        },
        methods: {
            async getContent() {
                const res = await this.$axios.$get('/api/wp-json/acf/v3/options/options');
                this.data = res.acf
            },
        },
        mounted() {
            this.getContent();
            this.$nextTick(() => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1500)
            });
            this.$nuxt.$router.beforeEach((to, from, next) => {
                this.isLoading = true;
                next();
            });
            this.$nuxt.$router.afterEach(() => {
                setTimeout(() => {
                    if(this.data) {
                        this.isLoading = false;
                    }

                }, 1000)
            });
        },
    }
</script>

<style lang="scss" scoped>


</style>
