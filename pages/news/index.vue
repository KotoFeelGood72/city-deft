<template>
    <div class="articles">
        <div class="container">
            <div class="articles-main">
                <section-title title="Новости" class="big"/>
                <ul class="articles-list grid-3">
                    <li v-for="(item, i) in articles" :key="'news-item-' + i">
                        <article-card :data="item"/>
                    </li>
                </ul>
                <paginate
                    :page-count="10"
                    :page-range="3"
                    v-model="page"
                    :container-class="'global-paginate'"
                    :prev-class="'paginate-prev'"
                    :next-class="'paginate-next'">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            sectionTitle: () => import('@/components/ui-kit/section-title'),
            articleCard: () => import('@/components/templates/article-card')
        },
        data() {
            return {
                page: 1,
                articles: [
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-1', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' },
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-2', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' },
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-3', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' },
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-4', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' },
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-5', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' },
                    { img: 'https://images.themagger.net/wp-content/uploads/2020/06/sergei-akulich-heLWtuAN3c-unsplash.jpg', link: '/article/article-6', title: 'Сейчас всё чаще звучит шопот бессменных лидеров', txt: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.articles {
    padding-top: 7.2rem;
}

.articles-main {
    .big {
        text-align: center;
        margin-bottom: 4.5rem;
    }
}

.articles-list {
    margin-bottom: 8.5rem;
}

.articles-main {
    margin-bottom: 5rem;
    .global-paginate {
        justify-content: center;
    }
}

</style>