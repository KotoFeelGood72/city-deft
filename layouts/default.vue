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
        <transition name="translate">
            <modal-burger v-if="getPopup('burger')"/>
        </transition>
        <Footer/>
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
            }
        },
        mounted() {
            setInterval(() => {
      const used = process.memoryUsage();
      for (let key in used) {
        console.log(`Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
      }
    }, 5000);
        },
        computed: {
            isForm() {
                const pages = ['/', '/about'];
                return !pages.includes(this.$route.path);
            },
            ...mapGetters(['getPopup']),
        }
    }
</script>

<style lang="scss" scoped>


</style>