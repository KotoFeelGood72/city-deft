<template>
    <div class="product-card" v-if="data">
        <div class="product-card__img">
            <ul class="product-status__list">
                <li v-for="(item, i) in data.acf.status" class="product-status__item">
                    <div>{{ item }}</div>
                </li>
            </ul>
            <nuxt-link :to="`/estate/${data.slug}`">
                <NuxtImg
                    v-if="data.acf.gallery"
                    :src="data.acf.gallery[0].images"
                    loading="lazy"
                />
            </nuxt-link>
        </div>
        <div class="product-card__content">
            <div class="product-card__top">
                <nuxt-link :to="`/estate/${data.slug}`"><h3>{{ data.title.rendered ? data.title.rendered : data.title }}</h3></nuxt-link>
                <button type="button" class="btn-add__heart" :class="{'active': activeFavorites}" @click="addToFavorites">
                    <icons :icon="'mdi:heart'"/>
                </button>
            </div>
            <div class="product-card__medium">
                <div class="product-card__address">
                    <icons :icon="'ph:map-pin-fill'"/>
                    <p>{{ data.acf.address }}</p>
                </div>
                <ul class="product-card__services">
                    <li v-for="(item, i) in data.acf.arrangement" :key="'services-' + i + data.id">
                        <div class="icon">
                            <icons :icon="item.icon"/>
                        </div>
                        <p>{{ item.num }}</p>
                    </li>
                </ul>
            </div>
            <div class="product-card__bottom">
                <div>
                    <div class="product-card__price" v-if="data.acf.price">{{ formattedPrice }}</div>
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
    import icons from '../icons/icons.vue';
    export default {
        props: {
            data: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                activeFavorites: false,
            }
        },
        components: {
            icons
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
            statusCard(key) {
                switch (key) {
                    case 'Продано':
                    return 'Продано';
                    case 'Арендовано':
                    return 'Арендовано';
                    case 'На рассмотрение':
                    return 'На рассмотрение';
                    default:
                    return 'Неизвестный статус';
                }
            }
        },
        mounted() {
            const isFavorite = this.getFavorites.some(p => p.id === this.data.id);
            this.activeFavorites = isFavorite;
        },
        computed: {
            ...mapGetters(['getFavorites']),
            formattedPrice() {
                let price = this.data.acf.price;
                if (price.includes('.')) return price;
                if (price.length > 3) {
                    return price.slice(0, -3) + '.' + price.slice(-3);
                }
                return price;
            },
        }
    }
</script>

<style lang="scss" scoped>

.product-card__img {
    width: 100%;
    height: 32.1rem;
    position: relative;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.product-status__list {
    position: absolute;
    top: 2rem;
    left: 2rem;
    pointer-events: none;
    margin: -.5rem -.5rem 0 0;
    @include flex-start;
    flex-wrap: wrap;
    li {
        padding: .5rem .5rem 0 0;
        div {
            border-radius: .5rem;
            background-color: $yellow;
            font-size: 1.4rem;
            font-family: $font_2;
            padding: .7rem 1.5rem;
            color: $dark;
        }
    }
}

.product-card {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 .8rem 7rem 0 rgba(0, 0, 0, 0.07);
    transition: all .3s ease;
    &:hover {
        box-shadow: 0 .8rem 10rem 0 rgba(0, 0, 0, 0.158);
    }
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
    @include bp($point_4) {
        margin: -1.5rem -1.5rem 0 0;
    }
    &>div {
        padding: 3rem 3rem 0 0;
        @include bp($point_4) {
            padding: 1.5rem 1.5rem 0 0;
        }
    }

    a {
        @include flex-center;
        color: $dark;
        background-color: $yellow;
        padding: 1.4rem 2rem;
        font-size: 1.6rem;
        font-weight: 500;
        border-radius: 0.5rem;

        @include bp($point_4) {
            padding: 1.2rem 1.5rem;
            font-size: 1.4rem;
        }
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