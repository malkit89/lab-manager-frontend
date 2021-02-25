import Vue from 'vue';
import Vuex from 'vuex';
import PersonModule from './modules/person_store';
import MessageModule from './modules/message_store';

// Make vue aware of Vuex
Vue.use(Vuex);

const modules = {
  Person: PersonModule,
  Message: MessageModule,
};

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
});
