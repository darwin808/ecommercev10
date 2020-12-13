import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItemsNumber: 0,
    cardItemsList: [],
    appleQuantity: 0,
    orangeQuantity: 0,
    peachQuantity: 0,
    displayCart: false,
    applePrice: 30,
    orangePrice: 20,
    peachPrice: 10,
  },
});
