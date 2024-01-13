<template>
    <div class="services">
        <div class="container">
            <div class="services_main">
                <section-title :title="getData['all-service'].title" :level="3" class="big"/>
                <div class="services_columns">
                    <div>
                        <ul class="services__list">
                            <li v-for="(item, i) in getData['all-service']['list-left']" :key="'services-one-' + i">
                                <div class="icon">
                                    <icons :icon="item.icon"/>
                                </div>
                                <div class="item-content">
                                    <p>{{ item.title }}</p>
                                    <span>{{ item.txt }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="column-img">
                            <NuxtImg 
                                :src="getData['all-service'].img"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div>
                        <ul class="services__list">
                            <li v-for="(item, i) in getData['all-service']['list-right']" :key="'services-two-' + i">
                                <div class="icon">
                                    <icons :icon="item.icon"/>
                                </div>
                                <div class="item-content">
                                    <p>{{ item.title }}</p>
                                    <span>{{ item.txt }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from '../icons/icons.vue';
import sectionTitle from '../ui-kit/section-title'
import { mapGetters } from 'vuex'
    export default {
        components: {
            sectionTitle,
            icons
        },
        computed: {
            ...mapGetters(['getData'])
        }
    }
</script>

<style lang="scss" scoped>

.services_main {
    .big {
        text-align: center;
        margin-bottom: 4.7rem;
    }
}

.services_columns {
    @include flex-start;
    align-items: flex-start;
    margin: -4rem -4rem 0 0;
    &>div {
        padding: 4rem 4rem 0 0;
    }
}

.column-img {
    border-radius: 1rem;
    overflow: hidden;
    @include flex-center;
    @include bp($point_2) {
        display: none;
    }
    img {
        width: 100%;
        // height: 100%;
        object-fit: cover
    }
}

.services__list {
    li {
        @include flex-start;
        align-items: flex-start;
        @include bp($point_2) {
            min-height: 13.5rem;
        }
        &:not(:last-child) {
            margin-bottom: 7rem;
            @include bp($point_2) {
                margin-bottom: 4rem;
            }
        }

        p {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        span {
            font-size: 1.8rem;
        }

        .icon {
            width: 4rem;
            height: 4rem;
            min-width: 4rem;
            @include flex-center;
            position: relative;
            color: $orange;
            margin-right: 1.2rem;
            &:before {
                border-radius: 0.5rem;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: '';
                background-color: $orange;
                opacity: .1;
                z-index: -1;
            }
        }
    }
}

</style>