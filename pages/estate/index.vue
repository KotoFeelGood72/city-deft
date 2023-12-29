<template>
    <div class="shop">
        <v-filter :isOpen="true"/>
        <div class="shops">
            <div class="container">
                <div class="shop__main">
                    <section-title title="Результаты поиска" class="big"/>      
                    <ul class="grid-3">
                        <li v-for="(item, i) in products" :key="'shop-product-' + i">
                            <products-card :data="item"/>
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
    </div>
</template>

<script>
    import productsCard from '@/components/templates/products-card'
    import vFilter from '@/components/templates/v-filter'
    import sectionTitle from '@/components/ui-kit/section-title'
    export default {
        components: {
            vFilter,
            sectionTitle,
            productsCard,
        },
        data() {
            return {
                page: 1,
                products: [],
            }
        },
        methods: {
            async getProducts() {
                const response = await this.$axios.$get('wp-json/wp/v2/estate')
                this.products = response
            },
        },
        mounted() {
            this.getProducts();
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