<template>
  <div class="team">
    <div class="container">
      <sectionTitle title="Наша команда" class="big"/>
      <div class="team__main">
        <div class="team_main__img">
          <nuxt-img
            v-if="img && img.source_url"
            :src="img.source_url"
          />
        </div>
        <ul v-if="data && data.acf">
          <li v-for="(item, i) in data.acf.team" :key="'team-item-' + i">
            <hero :img="item.img" :content="item"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import hero from '@/components/templates/hero.vue';
  import sectionTitle from '@/components/ui-kit/section-title.vue';
  export default {
    components: {
      sectionTitle,
      hero
    },
    data: () => ({
      data: null,
      img: null,
    }),
    methods: {
      async getPageContent(point) {
          const response = await this.$axios.get(`/api/wp-json/wp/v2/pages?slug=${point}`)
          this.data = response.data[0]
          await this.getPostImg();
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
      this.getPageContent('team')
    }
  }
</script>

<style scoped>

</style>
