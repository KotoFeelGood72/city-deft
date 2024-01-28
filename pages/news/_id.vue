<template>
    <div class="article" v-if="data">
        <div class="article-head__w">
            <div class="container">
                <div class="article-head">
                    <div class="back-link">
                        <nuxt-link to="">
                            <icons icon="radix-icons:chevron-left"/>
                            <p>Читать другую статью</p>
                        </nuxt-link>
                    </div>
                    <section-title :title="data.title ? data.title.rendered : ''" class="big single-title"/>
                </div>
                <div class="article_main__img">
                    <NuxtImg
                        v-if="img"
                        :src="img.source_url"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
        <div class="article-main">
            <div class="container">
                <div class="article-content" v-if="data && data.content" v-html="data.content.rendered"></div>
            </div>
        </div>
        <div class="article-bottom__w">
            <div class="container">
                <div class="article-bottom">
                    <p>Понравилась статья - поделись с друзьями</p>
                        <ShareNetwork
                            network="Telegram"
                            :url="'https://citydeft.com/' + url"
                            :title="shared.og_title"
                            :description="shared.og_description"
                        >
                        Share on Facebook

                    </ShareNetwork>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null,
            img: null,
            shared: null,
            url: null
        }
    },
    components: {
        sectionTitle: () => import('@/components/ui-kit/section-title'),
        icons: () => import('@/components/icons/icons'),
    },
    methods: {
        async getArticleSingle() {
            try {
                const response = await this.$axios.get(`/api/wp-json/wp/v2/posts?slug=${this.$route.params.id}`);
                if (response.data && response.data.length > 0) {
                    this.data = response.data[0];
                    this.shared = response.data[0].yoast_head_json;
                    this.url = this.$route.fullPath
                    await this.getPostImg();
                }
            } catch (error) {
                console.error('Ошибка при получении статьи:', error);
            }
        },
        async getPostImg() {
            if (!this.data.featured_media) return;

            try {
                const response = await this.$axios.get(`/api/wp-json/wp/v2/media/${this.data.featured_media}`);
                this.img = response.data;
            } catch (error) {
                console.error('Ошибка при получении изображения:', error);
            }
        }
    },
    mounted() {
        this.getArticleSingle()
    }
}
</script>

<style lang="scss" scoped>

.single-title {
    
}

.article {
    padding-top: 6rem;
}

.article-head {
    margin-bottom: 4rem;
    @include flex-center;
    position: relative;
}

.back-link {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    a {
        @include flex-start;
        background-color: $yellow;
        border-radius: 0.8rem;
        padding: 1rem 2rem;
        display: inline-flex;
        font-size: 1.8rem;
        font-family: $font_2;
        p {
            margin-bottom: -0.3rem;
        }
    }
}

.article_main__img {
    width: 100%;
    height: auto;
    margin-bottom: 7rem;
    img {
        width: 100%;
        object-fit: cover;
    }
}



.article-content {
    :deep(p, ul, ol, li, strong, a) {
        font-size: 2.2rem;
    }
}

:deep(.wp-block-heading) {
    font-size: 3.2rem;
    color: rgba(85, 85, 85, 1);
    padding: 3rem 2rem 3rem 7.8rem;
}

:deep(.wp-block-image) {
    padding: 3rem 0;
}

</style>