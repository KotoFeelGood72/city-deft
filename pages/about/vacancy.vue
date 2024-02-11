<template>
  <div class="vacancy" v-if="data">
    <div class="container">
      <div class="vacancy__main">
        <sectionTitle title="Вакансии" class="big"/>
        <ul class="vacancy__list" v-if="data && data.acf">
          <li v-for="(item, i) in data.acf.vacancy" :key="'vacancy-item' + i">
            <CircleCard :data="item"/>
          </li>
        </ul>
        <div class="vacancy-notice">
          Присылайте свое резюме на почту <a href="mailto:info@citydeft.com">info@citydeft.com</a> или на любой мессенджер <a href="tel:+905077060007">+905077060007</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CircleCard from '@/components/templates/circle-card.vue';
  import sectionTitle from '../../components/ui-kit/section-title.vue';
  export default {
    components: {
      sectionTitle,
      CircleCard
    },
    data: () => ({
      data: null,
      img: null,
    }),
    methods: {
      async getPageContent(point) {
          const response = await this.$axios.get(`/api/wp-json/wp/v2/pages?slug=${point}`)
          this.data = response.data[0]
      },
    },
    mounted() {
      this.getPageContent('vacancy')
    }
  }
</script>

<style scoped lang="scss">

.vacancy__main {
  .big {
    margin: 4rem 0 10rem 0;
    text-align: center;
  }
}
</style>
