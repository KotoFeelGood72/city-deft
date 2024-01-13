<template>
    <nav class="nav">
        <ul class="nav-list">
            <li v-for="(item, i) in nav" :key="'nav-' + i" class="nav_item__parent" @click="toggleSubMenu(i)">
                <div :class="{'active': activeIndex === i}">
                    <p>{{ item.name }}</p>
                    <div class="icon" v-if="item.submenu && item.on_submenu" :class="{'active': activeIndex === i}">
                        <icons icon="fluent:triangle-down-16-filled"/>
                    </div>
                </div>
                <transition name="translate">
                    <ul class="sub-menu" v-if="activeIndex === i && item.submenu && item.on_submenu">
                        <li v-for="(subitem, i) in item.submenu" :key="'nav-' + i" class="nav_item__submenu">
                            <nuxt-link :to="item.link + subitem.link">{{ subitem.name }}</nuxt-link>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </nav>
</template>

<script>
    // import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                activeIndex: false,
            }
        },
        props: ['nav'],
        methods: {
            toggleSubMenu(index) {
                this.activeIndex = this.activeIndex === index ? false : index;
            },
        },
        // computed: {
        //     ...mapGetters(['getData'])
        // }
    }
</script>

<style lang="scss" scoped>

.nav {
    margin-right: 3.8rem;
}

.nav-list {
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
    
    &.active {
        transform: translateY(-50%) rotate(180deg);
        color: $orange;
    }
    svg {
        width: 100%;
        height: 100%;
    }
}



.burger-nav {
    a {
        &:hover {
            color: $orange;
        }
    }
    &>ul {
        flex-direction: column;
        align-items: flex-start;
        &>li {
            overflow: hidden;
            &>div {

                &.active {
                    color: $orange;
                }
                cursor: pointer;
                position: relative;
                &:hover {
                    color: $orange;
                }
            }
            margin-bottom: 2rem;
            font-size: 1.6rem;
            font-weight: 600;
        }
    }
}

.sub-menu {
    padding: 1rem;
    li {
        font-size: 1.4rem;
        padding: .5rem 0;
    }
}




.translate-enter, .translate-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.translate-enter-active, .translate-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}


.translate-enter-to, .translate-leave {
  opacity: 1;
  transform: translateY(0);
}

</style>