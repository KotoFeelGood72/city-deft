<template>
  <div class="card">
    <div class="card-img">
      <NuxtImg
        v-if="data.img"
        :src="data.img"
      />
    </div>
    <div class="card-content">
      <div class="card-title"><h3>{{ data.title }}</h3></div>
      <div class="card-txt" v-html="data.txt"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
  }
</script>

<style scoped lang="scss">

.card {
  @include flex-start;
  background-color: #D9D9D9;
  margin-bottom: 12rem;
  padding: 1.5rem 5rem 1.5rem 3.6rem;
  border-radius: .6rem;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(217, 217, 217);
}

.card-img {
  min-width: 30rem;
  width: 30rem;
  height: 30rem;
  position: relative;
  margin-right: 7.3rem;
  margin-top: -7.5rem;
  margin-bottom: 6.2rem;
  z-index: 2;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    transform: translate(-50%, -50%);
    background-color: $white;
    border-radius: 100%;
    width: 110%;
    height: 110%;
    z-index: -1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
}

.card-content {
  flex-grow: 1;
  font-size: 1.8rem;
}

.card-title {
  h3 {
    font-size: 2rem;
    padding-bottom: 1.2rem;
  }
  border-bottom: .1rem solid $white;
  margin-bottom: 2.5rem;
}

</style>
