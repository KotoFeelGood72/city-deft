<template>
    <header>
        <TopHeader/>
        <div class="container">
            <div class="header-main">
                <div class="logo">
                    <nuxt-link to="/">
                        <NuxtImg 
                            src="logo.png"
                            alt=""
                            placeholder
                            loading="lazy"
                        />
                    </nuxt-link>
                </div>
                <v-nav/>
                <div class="actions">
                    <v-btn name="Связаться" @click.native="open('form')"/>
                    <nuxt-link to="/favorite" class="hearth-link">
                        <icons icon="mdi:heart"/>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import vNav from '@/components/ui-kit/v-nav';
    import TopHeader from './TopHeader';
    import vBtn from '@/components/ui-kit/v-btn';
    export default {
        components: {
            TopHeader,
            vNav,
            vBtn
        },
        methods: {
            open(modal) {
                console.log('modal')
                this.$store.commit('openPopup', modal)
            }
        }
    }
</script>

<style lang="scss" scoped>

.header-main {
    @include flex-space;
    padding: 2.1rem 0 1.6rem 0;
}

.logo {
    max-width: 16.1rem;
    margin-right: 6.6rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.actions {
    @include flex-end;
    column-gap: 2.8rem;
}

.hearth-link {
    color: $yellow;
    width: 3.6rem;
    height: 3.6rem;
    @include flex-center;
    svg {
        width: 100%;
        height: 100%;
    }
    &:hover {
        color: $accent;
    }
}

</style>