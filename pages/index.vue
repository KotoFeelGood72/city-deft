<template>
  <div class="home" v-if="data">
      <hero-slider :slides="data['sale-slider']" class="home-slider"/>
      <v-filter class="home-filter"/>
      <div class="feature-house">
        <div class="container">
          <div class="feature-house__main">
            <div class="feature-house__top">
                <section-title :level="3" title="Лучшие предложения" class="big"/>
                <nuxt-link to="/estate">Смотреть все</nuxt-link>
            </div>
            <ul class="feature-list grid-3">
              <li v-for="(item, i) in feature" :key="'product-' + i">
                <products-card :data="item"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home-cat">
        <div class="container">
          <div class="home-cat__main">
            <div class="home-cat-top">
              <section-title title="Недвижимость по категориям" :level="3" class="big-xl"/>
              <p>Подборка недвижимости в Турции</p>
            </div>
            <ul class="home-cat__list" v-if="categories">
              <li v-for="item in categories" :key="'categories-' + item.id">
                  <nuxt-link :to="`/estate/category/${item.slug}`">
                    <NuxtImg
                      v-if="item.acf.img" 
                      :src="item.acf.img" 
                      alt=""
                      loading="lazy"
                    />
                    <h3>{{ item.name }}</h3>
                  </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <actions class="home-about" :data="data"/>
      <services class="home-services"/>
      <questions class="home-questions"/>
  </div>
</template>

<script>
  import heroSlider from '../components/blocks/hero-slider';
  import productsCard from '../components/templates/products-card';
  import vFilter from '../components/templates/v-filter';
  import sectionTitle from '../components/ui-kit/section-title';
  import vCat from '../components/blocks/v-cat';
  import actions from '../components/blocks/actions';
  import services from '../components/blocks/services';
  import questions from '../components/blocks/questions';

  export default {
    components: {
      heroSlider,
      vFilter,
      sectionTitle,
      productsCard,
      vCat,
      actions,
      services,
      questions
    },
    data() {
      return {
        feature: [],
        categories: [],
        data: null,
      }
    },
    methods: {
      async getFeature() {
        const response = await this.$axios.$get('/api/wp-json/wp/v2/estate?meta=2')
        this.feature = response
      },
      async getCategories() {
        const response = await this.$axios.$get('/api/wp-json/wp/v2/estate_categories/')
        this.categories = response
      },
      async getContent() {
          const res = await this.$axios.$get('/api/wp-json/acf/v3/options/options');
          this.data = res.acf
      }
    },
    mounted() {
      this.getFeature();
      this.getCategories();
      this.getContent();
    },
  }
</script>

<style lang="scss" scoped>

.home-slider {
  margin-bottom: 2.5rem;
}

.home-filter {
  margin-bottom: 8.4rem;
}


.feature-house {
  margin-bottom: 6rem;
}

.home-about {
  margin-bottom: 6rem;
}

.home-services {
  margin-bottom: 6rem;
}

.home-questions {
  margin-bottom: -3.7rem;
}
.feature-house__top {
  @include flex-space;
  margin-bottom: 4rem;

  a {
    font-size: 2.4rem;
    font-weight: 600;
    color: $gray;
    &:hover {
      color: $accent;
    }
  }
}


.home-cat {
  margin-bottom: 7.6rem;
}
.home-cat-top {
  text-align: center;
  margin-bottom: 4rem;

  .big-xl {
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 2rem;
    color: $dark-light;
  }
}

.home-cat__list {
  display: grid;
  grid-gap: 3rem;
  grid-template-areas: 
            "a b c"
            "a d e";
  @include bp($point_2) {
    grid-gap: 1rem;
  }
  li {
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;   
    }

    position: relative;
    overflow: hidden;


    &:hover {
      img {
        transform: scale(1.3);
      }
    }

    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $white;
      text-align: center;
      padding: 1.6rem 1rem;
      font-size: 2.4rem;
      font-family: $font_2;
      font-weight: 500;

      @include bp($point_2) {
        font-size: 2rem;
      }
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        content: '';
        background: rgba(0, 96, 119, 0.02);
        backdrop-filter: blur(14.5px);
        z-index: -1;
        min-height: 8.8rem;
      }
    }






    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 10s ease;
    }
  }
}
</style>