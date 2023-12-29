<template>
    <div class="top-header">
        <div class="container">
            <div class="top-header__main">
                <ul class="social-list">
                    <li v-for="(item, i) in getData.contacts.messenger" :key="'social-' + i">
                        <a :href="item.link">
                            <icons v-if="item.icon" :icon="item.icon"/>
                        </a>
                    </li>
                </ul>
                <ul class="contacts-list">
                    <li>
                        <a :href="`tel:${getData.contacts.phone}`">
                            <p>{{ getData.contacts.phone }}</p>
                        </a>
                    </li>
                    <li>
                        <a :href="`mailto:${getData.contacts.mail}`">
                            <div class="icon">
                                <icons icon="ei:envelope"/>
                            </div>
                            <p>{{ getData.contacts.mail }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['getData'])
        }
    }
</script>

<style lang="scss" scoped>

.top-header {
    background-color: $yellow;
    color: $dark-light;
    a {
        color: inherit;
    }
}

.top-header__main {
    @include flex-end;
}

.social-list, .contacts-list {
    @include flex-start;

}

.social-list {
    margin-right: 2.5rem;
    li {
        width: 4rem;
        height: 4rem;
        a {
            @include flex-center;
            width: 100%;
            height: 100%;
        }
    }
}

.contacts-list {
    margin: -3rem -3rem 0 0;
    li {
        padding: 3rem 3rem 0 0;
        a {
            @include flex-start;
            .icon {
                margin-right: 1rem;
                width: 3.1rem;
                height: 3.1rem;
                svg {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.top-header__main {
    padding: 1rem 0;
}

</style>