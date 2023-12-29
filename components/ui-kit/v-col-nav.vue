<template>
    <nav class="col-nav">
        <h6>{{ data.title }}</h6>
        <ul>
            <li v-for="(item, i) in data.nav" :key="'col-nav' + data.id + i">
                <nuxt-link :to="item.link" v-if="!item.contacts">
                    <div class="icon" v-if="item.icon && item.icons">
                        <icons :icon="item.icon"/>
                    </div>
                    <p>{{ item.title }}</p>
                </nuxt-link>
                <a target="_blank" :href="item.link" v-else>
                    <div class="icon" v-if="item.icon && item.icons">
                        <icons :icon="item.icon"/>
                    </div>
                    <p>{{ item.title }}</p>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang="scss" scoped>

.col-nav {
    h6 {
        font-size: 2.4rem;
        font-weight: 500;
        font-family: $font_2;
        margin-bottom: 2.4rem;
    }
}

ul {
    li {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
        a {
            font-size: 1.8rem;
            font-family: $font_2;
            color: $dark-light;
            @include flex-start;

            .icon {
                margin-right: 1rem;
                width: 2rem;
                height: 2rem;
                svg {
                    @include flex-center;
                    width: 100%;
                    height: 100%;
                }
            }
            &:hover {
                color: $orange;
            }
        }
    }
}

</style>