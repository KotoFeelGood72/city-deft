<template>
  <div class="contacts">
    <div class="container">
      <sectionTitle title="Контакты" class="big center"/>
      <div class="contacts_main">
        <div class="contacts__info">
          <ul>
            <li>
              <span>Мы работаем:</span>
              <p>Понедельник-пятница — <br>с 09:00 до 18:00 <br>суббота — с 09:00 до 15:30 <br>воскресенье — выходной</p>
            </li>
            <li>
              <span>Телефон:</span>
              <a href="#">+90 507 706 00 07</a>
              <p>На связи 24/7</p>
              <ul class="social">
                <li></li>
              </ul>
            </li>
            <li>
              <span>Электронная почта:</span>
              <a href="#">info@citydeft.com</a>
            </li>
            <li>
              <span>Наш офис:</span>
              <p>Saray Mah. Oral Cad. 25/B Öztürk 2 Apt. Alanya / Antalya</p>
            </li>
          </ul>
        </div>
        <div class="contacts__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1453456787017!2d31.986186191973747!3d36.55060826481347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca3954b67a575%3A0x7bf2e9fe1bf2662b!2sDeft%20Group!5e0!3m2!1sru!2sru!4v1707590843049!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from '../components/ui-kit/section-title.vue';
  export default {
    components: {
      sectionTitle
    }
  }
</script>

<style scoped>

</style>
