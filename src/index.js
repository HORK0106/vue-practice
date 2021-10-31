import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

import Typing from "./components/Typing"; // 作ったやつ

new Vue({
  el: "#app", // アプリをマウントする要素(セレクタで指定)
  components: { Typing }, // appというコンポーネントを使うよ、という宣言
  template: "<typing/>", // el(今回は#app)の中に表示する内容
});
