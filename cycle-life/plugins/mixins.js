import Vue from 'vue';
let show = () => console.log('全局')
Vue.prototype.$show = show;

//全局过滤器
import * as filters from '../assets/script/filters';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

import dFoucs from '../assets/script/directives/dFocus';

Vue.directive('foucs1', dFoucs)

Vue.mixin({
  methods:{
    $seo(title,content,payload = []){
      return {
        title,
        meta:[{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})