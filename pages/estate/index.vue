<template>
    <div class="shop">
        <v-filter :isOpen="true"/>
        <div class="shops">
            <div class="container">
                <div class="shop__main">
                    <section-title title="Результаты поиска" class="big"/>   
                    <ul class="grid-3" v-if="filtered">
                        <li v-for="(item, i) in filtered" :key="'shop-filters-' + i">
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
    // import { mapGetters } from 'vuex'
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
                // filterEstate: [],
                filtered: null,
                headers: null,
            }
        },
        watch: {
            page(newPage) {
                this.updateURL(newPage);
            },
            '$route': {
                immediate: true,
                handler() {
                    this.result();
                }
            },
        },
        methods: {
            async updateURL(page) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                const queryParams =  {
                    ...this.$route.query,
                    page: page.toString()
                }
                try {
                    const response = await this.$axios.get('/api/wp-json/wp/v2/estate/filter', {
                        params: queryParams,
                    });
                    this.filtered = response.data
                    this.pages = parseInt(response.headers['x-wp-totalpages'])
                    // console.log(this.headers)
                } catch (error) {
                    console.error('Ошибка при выполнении запроса:', error);
                }
            },
            async result() {
                const queryParams = this.$route.query
                try {
                    const response = await this.$axios.get('/api/wp-json/wp/v2/estate/filter', {
                        params: queryParams,
                    });
                    this.filtered = response.data
                    this.pages = parseInt(response.headers['x-wp-totalpages'])
                    // console.log(this.headers)
                } catch (error) {
                    console.error('Ошибка при выполнении запроса:', error);
                }
            }
        },
        mounted() {
            this.result();
            this.pages = this.isPage
        },
        computed: {
            // isPage() {
            //     if(this.headers) {
            //         console.log(this.headers)
            //         return parseInt(this.headers['x-wp-totalpages'])
            //     }
            // }
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