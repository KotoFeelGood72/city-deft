<template>
    <div class="template-hero" v-if="content">
        <div class="container">
            <div class="templateHero__main">
                <div class="templateHero__content">
                    <section-title :title="content.title.rendered" class="big"/>
                    <div class="templateHero-content__txt" :class="{'small': small}">
                        <div v-if="content.excerpt" v-html="content.excerpt.rendered"></div>
                    </div>
                </div>
                <nuxt-img v-if="img" :src="img.source_url"/>
            </div>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '../ui-kit/section-title'
    export default {
        components: {
            sectionTitle
        },
        props: ['content', 'img', 'small'],
    }
</script>

<style lang="scss" scoped>

.template-hero {
    position: relative;
    margin-bottom: 6rem;
    border-top: .1rem solid #e5e5e55e;
    // border-bottom: .1rem solid #e5e5e55e;

    .templateHero__main {
        @include flex-space;
        align-items: flex-start;
    }

    img {
        margin-left: -5%;
        display: block;
        pointer-events: none;
    }

    .big {
        margin-bottom: 6rem;
    }
}

.templateHero__content {
    padding: 6rem 0;
    max-width: 50%;
    font-size: 2rem;
    line-height: 3rem;
}

.templateHero-content__txt {
    &.small {
        div {
            font-size: 1.8rem;
            line-height: 2.6rem;
            :deep(p) {
                margin-bottom: 2rem;
            }
        }
    }
}

</style>