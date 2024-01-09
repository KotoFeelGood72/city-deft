<template>
    <div class="product-card" v-if="data.acf">
        <div class="product-card__img">
            <nuxt-link :to="`/estate/${data.slug}`">
                <NuxtImg 
                    :src="data.acf.gallery[0].images"
                    loading="lazy"
                />
            </nuxt-link>
        </div>
        <div class="product-card__content">
            <div class="product-card__top">
                <h3>{{ data.title.rendered ? data.title.rendered : data.title }}</h3>
                <button type="button" class="btn-add__heart" :class="{'active': activeFavorites}" @click="addToFavorites">
                    <icons icon="mdi:heart"/>
                </button>
            </div>
            <div class="product-card__medium">
                <div class="product-card__address">
                    <icons icon="ph:map-pin-fill"/>
                    <p>{{ data.acf.address }}</p>
                </div>
                <ul class="product-card__services">
                    <li v-for="(item, i) in data.acf.arrangement" :key="'services-' + i">
                        <div class="icon">
                            <icons :icon="item.icon"/>
                        </div>
                        <p>{{ item.num }}</p>
                    </li>
                </ul>
            </div>
            <div class="product-card__bottom">
                <div>
                    <div class="product-card__price">{{ data.acf.price }}</div>
                </div>
                <div>
                    <nuxt-link :to="`/estate/${data.slug}`">Смотреть обьект</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: ['data'],
        data() {
            return {
                activeFavorites: false,
            }
        },
        methods: {
            addToFavorites() {
                const isFavorite = this.getFavorites.some(p => p.id === this.data.id);
                if (isFavorite) {
                    this.$store.dispatch('removeFromFavorites', this.data.id);
                    this.$toast('Обьект удален из избранного', {type: 'error'})
                } else {
                    this.$store.dispatch('addToFavorites', this.data);
                    this.$toast('Успешно добавлено в избранное', {type: 'success'})
                }
                this.activeFavorites = !isFavorite;
            },
        },
        mounted() {
            const isFavorite = this.getFavorites.some(p => p.id === this.data.id);
            this.activeFavorites = isFavorite;
        },
        computed: {
            ...mapGetters(['getFavorites'])
        }
    }
</script>

<style lang="scss" scoped>

.product-card__img {
    width: 100%;
    height: 32.1rem;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.product-card {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0px 8px 70px 0px rgba(0, 0, 0, 0.07);
}

.product-card__content {
    padding: 3rem;
}

.product-card__top {
    position: relative;
    margin-bottom: 1.7rem;
    h3 {
        font-size: 2.2rem;
    }
}

.btn-add__heart {
    position: absolute;
    top: .7rem;
    right: 0;
    color: $gray;
    width: 2rem;
    height: 2rem;
    @include flex-center;
    cursor: pointer;

    &.active {
        color: $red;
        &:hover {
            color: $red;
        }
    }
    &:hover {
        color: $accent;
    }
}

.product-card__address {
    @include flex-start;
    color: $dark-light;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    svg {
        margin-right: 1rem;
        width: 1.5rem;
    }
}

.product-card__services {
    margin: -2rem -2rem 2.5rem 0;
    @include flex-start;
    li {
        @include flex-start;
        padding: 2rem 2rem 0 0;
        font-size: 1.4rem;
        font-family: $font_2;
        font-weight: 400;
        .icon {
            margin-right: 0.5rem;
            width: 1.6rem;
            @include flex-center;
            svg {
                @include flex-center;
                width: 100%;
                height: 100%;
            }
        }
    }
}

.product-card__bottom {
    @include flex-space;
    margin: -3rem -3rem 0 0;
    &>div {
        padding: 3rem 3rem 0 0;
    }

    a {
        @include flex-center;
        color: $dark;
        background-color: $yellow;
        padding: 1.4rem 2rem;
        font-size: 1.6rem;
        font-weight: 500;
        border-radius: 0.5rem;
        &:hover {
            background-color: $accent;
        }
    }
}

.product-card__price {
    font-size: 2.2rem;
    font-weight: 700;
    color: $orange;
    &:before {
        content: '€ ';
    }
}

</style>