import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.DEV === 'true'
});
