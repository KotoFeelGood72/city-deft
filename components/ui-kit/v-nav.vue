<template>
    <nav class="nav">
        <ul class="nav-list">
            <li v-for="(item, i) in getData['header-nav']" :key="'nav-' + i" class="nav_item__parent" @mouseover="activeIndex = i" @mouseleave="activeIndex = null">
                <nuxt-link :to="item.link">
                    <p>{{ item.name }}</p>
                    <div class="icon" v-if="item.submenu && item.on_submenu">
                        <icons icon="fluent:triangle-down-16-filled"/>
                    </div>
                </nuxt-link>
                <transition name="translate">
                    <ul v-if="activeIndex === i && item.submenu && item.on_submenu">
                        <li v-for="(subitem, i) in item.submenu" :key="'nav-' + i" class="nav_item__submenu">
                            <nuxt-link :to="subitem.link">{{ subitem.name }}</nuxt-link>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                activeIndex: null,
                nav: [
                    {
                        name: 'Недвижимость',
                        link: '/',
                        submenu: [
                            { name: 'Эксклюзивные предложения', link: '' },
                            { name: 'Новостройка', link: '' },
                            { name: 'Вторичное жилье', link: '' },
                            { name: 'На берегу моря', link: '' },
                            { name: 'Для гражданства', link: '' }
                        ]
                    },
                    {
                        name: 'Услуги',
                        link: '/',
                        submenu: [
                            { name: 'Ознакомительный тур', link: '' },
                            { name: 'Онлайн-подбор', link: '' },
                            { name: 'Продать недвижимость', link: '' },
                            { name: 'Послепродажный сервис', link: '' },
                        ]
                    },
                    {
                        name: 'О компании',
                        link: '/',
                        submenu: [
                            { name: 'О нас', link: '' },
                            { name: 'Наша команда', link: '' },
                            { name: 'Вакансии', link: '' },
                        ]
                    },
                    {
                        name: 'Отзывы',
                        link: ''
                    },
                    {
                        name: 'Полезное',
                        link: '/',
                        submenu: [
                            { name: 'Новости', link: '' },
                            { name: 'Процедура покупки', link: '' },
                            { name: 'Гражданство и ВНЖ', link: '' },
                            { name: 'Инвестиции', link: '' },
                            { name: 'Статьи', link: '' },
                        ]
                    },
                    {
                        name: 'Контакты',
                        link: ''
                    },
                ]
            }
        },
        computed: {
            ...mapGetters(['getData'])
        }
    }
</script>

<style lang="scss" scoped>

.nav {
    margin-right: 3.8rem;
}

.nav-list {
    @include flex-start;
    font-family: $font_2;
    font-weight: 400;
    margin: -3rem -3rem 0 0;
    &>li {
        padding: 3rem 3rem 0 0;
        position: relative;
        &:hover {
            .icon {
                color: $orange;
                transform: rotate(180deg);
                top: .5rem;
            }
        }
        &>a {
            position: relative;
            padding-right: 2rem;
            @include flex-start;

        }

        ul {
            position: absolute;
            top: 100%;
            z-index: 99;
            background-color: $white;
            border-radius: 0.5rem;
            padding: 2rem;
            font-size: 1.4rem;
            font-family: $font_2;
            color: $dark-light;
            min-width: 25rem;

            li {
                a {
                    &:hover {
                        color: $orange;
                    }
                }
                &:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
.icon {
    position: absolute;
    top: 58%;
    right: 0;
    left: auto;
    transform: translateY(-50%);
    width: 1.3rem;
    height: 1.3rem;
    color: $gray;
    @include flex-center;
    transition: all .3s ease;
    svg {
        width: 100%;
        height: 100%;
    }
}


/* Define the initial state of entering and leaving */
.translate-enter, .translate-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Define the duration and type of transition */
.translate-enter-active, .translate-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Define the final state of entering and initial state of leaving */
.translate-enter-to, .translate-leave {
  opacity: 1;
  transform: translateY(0);
}


</style>