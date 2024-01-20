<template>
    <div class="pages">
        <Header :content="data"/>
        <main class="main">
            <Nuxt/>
        </main>
        <actions v-if="isForm" :forms="isForm"/>
        <transition name="translate">
            <modal-form v-if="getPopup('form')"/>
        </transition>
        <transition name="translate">
            <modal-burger v-if="getPopup('burger')"/>
        </transition>
        <Footer :data="data"/>
    </div>
</template>

<script>
    import Header from '@/components/templates/Header';
    import Footer from '@/components/templates/Footer';
    import actions from '@/components/blocks/actions';
    import modalForm from '../modal/modal-form';
    import modalBurger from '../modal/modal-burger';
    import { mapGetters } from 'vuex'
    export default {
        components: { Header, Footer, actions, modalForm, modalBurger },
        data() {
            return {
                isForms: false,
                data: null,
            }
        },
        computed: {
            isForm() {
                const pages = ['/', '/about'];
                return !pages.includes(this.$route.path);
            },
            ...mapGetters(['getPopup']),
        },
        methods: {
            async getContent() {
                const res = await this.$axios.$get('/api/wp-json/acf/v3/options/options');
                this.data = res.acf
            }
        },
        mounted() {
            this.getContent();
        }
    }
</script>

<style lang="scss" scoped>


</style>