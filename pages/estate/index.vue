<template>
    <div class="shop">
        <v-filter :isOpen="true"/>
        <div class="shops">
            <div class="container">
                <div class="shop__main">
                    <section-title :title="isTitle" class="big"/>     
                    <ul class="grid-3" v-if="getFilter">
                        <li v-for="item in getFilter.data" :key="'shop-filters-' + item.id">
                            <products-card :data="item"/>
                        </li>
                    </ul>
                    <paginate
                        v-if="pages"
                        :page-count="pages"
                        :page-range="3"
                        v-model="page"
                        :container-class="'global-paginate'"
                        :prev-class="'paginate-prev'"
                        :next-class="'paginate-next'">
                    </paginate>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import productsCard from '@/components/templates/products-card'
    import vFilter from '@/components/templates/v-filter'
    import sectionTitle from '@/components/ui-kit/section-title'
    import { mapGetters } from 'vuex'
    export default {
        components: {
            vFilter,
            sectionTitle,
            productsCard,
        },
        data() {
            return {
                page: 1,
                pages: null,
                estate: [],
                filterEstate: [],
            }
        },
        watch: {
            page(newPage) {
                this.updateURL(newPage);
            }
        },
        methods: {
            updateURL(page) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                const newQuery = {
                    ...this.$route.query,
                    page: page.toString(),
                    per_page: 6,
                };
                this.$store.dispatch('fetchFilter', { filterData: newQuery }).then(() => {
                    this.$router.push({ path: this.$route.path, query: newQuery });
                });
            }
        },
        mounted() {
            this.pages = this.isPage
        },
        computed: {
            ...mapGetters(['getFilter']),
            isTitle() {
                return this.getFilter ? 'Результаты поиска' : 'Каталог недвижимости'
            },
            isPage() {
                return parseInt(this.getFilter.head['x-wp-totalpages'])
            }
        }
    }
</script>

<style lang="scss" scoped>

.shop__main {
    margin-bottom: 10rem;

    .global-paginate {
        justify-content: center;
    }
    .big {
        padding: 3.5rem 0 3.9rem 0;
    }

    .grid-3 {
        margin-bottom: 3.7rem;
    }
}



</style>