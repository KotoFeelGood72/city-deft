<template>
    <div class="card">
        <div class="card-img">
            <NuxtImg
                v-if="this.img" 
                :src="this.img.source_url"
                :alt="this.img.alt_text"
                loading="lazy"
            />
        </div>
        <div class="card-content">
            <section-title :title="data.title.rendered" class="small" :level="3"/>
            <div v-html="trimmedText"></div>
            <nuxt-link :to="data.slug">Читать полностью</nuxt-link>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '../ui-kit/section-title';
    export default {
        data() {
            return {
                img: null,
            }
        },
        components: {
            sectionTitle
        },
        props: ['data'],
        computed: {
            trimmedText() {
                const maxLength = 120; 
                if(this.data.excerpt.rendered) {
                    let result = this.data.excerpt.rendered.substring(0, maxLength);
                    const ellipsisIndex = result.indexOf(' […]');
                    if (ellipsisIndex !== -1) {
                        result = result.substring(0, ellipsisIndex);
                    }

                    if (this.data.excerpt.rendered.length > maxLength) {
                        result += '…';
                    }
        
                    return result;
                }

            }
        },
        methods: {
            async getPostImg() {
                try {
                    const response = await this.$axios.get(`/api/wp-json/wp/v2/media/${this.data.featured_media}`)
                    this.img = response.data
                } catch (error) {
                    
                }
            }
        },
        mounted() {
            this.getPostImg();
        }
    }
</script>

<style lang="scss" scoped>

img {
    width: 100%;
    height: 100%;
    display: block;
}

.card {
    border-radius: 1rem;
    overflow: hidden;
    border-radius: 9.445px;
    border: 0.945px solid #F2F9FF;
    background: $white;
    box-shadow: 0px 18.891px 18.891px 0px rgba(0, 63, 128, 0.05);
}

.card-content {
    padding: 1.9rem;
    font-size: 1.6rem;
    font-family: $font_2;
    font-weight: 400;
    color: $dark-light;

    h3 {
        color: $dark;
        font-family: $font_1;
    }

    :deep(p) {
        padding: 2rem 0;
        font-size: 1.4rem;
        position: relative;
        margin-bottom: 1.6rem;
        &:before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 300%;
            border-bottom: .1rem solid #F2F9FF;
            content: '';
            left: -100%;
        }
    }

    a {
        @include flex-center;
        background-color: $yellow;
        padding: 1rem;
        border-radius: 0.5rem;
        &:hover {
            background-color: $accent;
        }
    }
}

.card-img {
    width: 100%;
    height: 23.6rem;
}

</style>