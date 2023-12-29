<template>
    <div class="pages">
        <Header/>
        <main class="main">
            <Nuxt/>
        </main>
        <actions v-if="isForm" :forms="isForm"/>
        <transition name="translate">
            <modal-form v-if="getPopup('form')"/>
        </transition>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/templates/Header';
    import Footer from '@/components/templates/Footer';
    import actions from '@/components/blocks/actions';
    import modalForm from '../modal/modal-form';
    import { mapGetters } from 'vuex'
    export default {
        components: { Header, Footer, actions, modalForm },
        data() {
            return {
                isForms: false,
            }
        },
        computed: {
            isForm() {
                const pages = ['/', '/about'];
                return !pages.includes(this.$route.path);
            },
            ...mapGetters([
                'getPopup'
            ]),
        }
    }
</script>

<style lang="scss" scoped>


</style>