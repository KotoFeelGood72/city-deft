<template>
    <div class="shop">
      <v-filter :isOpen="true" />
      <div class="shops">
        <div class="container">
          <div class="shop__main">
            <section-title v-if="pageName.name" :title="pageName.name" class="big" />
            <ul class="grid-3">
              <li v-for="(item, i) in estate" :key="'shop-product-' + i">
                <products-card :data="item" />
              </li>
            </ul>
            <paginate
              v-if="pages"
              :page-count="pages"
              v-model="page"
              :container-class="'global-paginate'"
              :prev-class="'paginate-prev'"
              :next-class="'paginate-next'"
            />
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import productsCard from '@/components/templates/products-card';
  import vFilter from '@/components/templates/v-filter';
  import sectionTitle from '@/components/ui-kit/section-title';
  
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
        pageName: '',
      };
    },
    watch: {
      async page(newPage) {
        await this.updatePageData(newPage);
      },
    },
    methods: {
      async updatePageData(newPage) {
        await this.getCategory(this.pageName.id, newPage);
        this.updateURL(newPage);
      },
      async getCategory(id, page) {
        try {
          const response = await this.$axios.get(`wp-json/wp/v2/estate?estate_categories=${id}&per_page=6&page=${page}`);
          if (response && response.headers) {
            this.pages = parseInt(response.headers['x-wp-totalpages']);
            this.estate = response.data;
            this.scrollToTop();
          }
        } catch (error) {
          console.error('Ошибка при получении данных категории:', error);
        }
      },
      async getCategoryName(id) {
        const response = await this.$axios.$get(`wp-json/wp/v2/estate_categories?slug=${id}`);
        return response[0];
      },
      updateURL(page) {
        this.$router.push({ query: { ...this.$route.query, page: page.toString() } });
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },
    },
    async mounted() {
      const pageName = await this.getCategoryName(this.$route.params.id);
      if (pageName) {
        this.pageName = pageName;
        await this.getCategory(pageName.id, this.page);
      }
    },
  };
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