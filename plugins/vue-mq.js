import Vue from 'vue'
import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { 
    point_7: 320,
    point_6: 375,
    point_5: 480,
    point_4: 640,
    point_3: 768,
    point_2: 1024,
    point_1: Infinity,
  },
//   defaultBreakpoint: 'point_2' 
})
