import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brendovi:[],
    telefoni: [],
    sviTelefoniIDs: []
  },
  getters: {
    
  },
  mutations: {
    addBrendovi(state, brendovi){
      state.brendovi = brendovi;
    },
    addTelefon(state, telefon){
      if (telefon && telefon.id) {
        Vue.set(state.telefoni, telefon.id, telefon);
      } else {
        console.error("Nevažeći objekat telefona ili nedostaje svojstvo 'id'.");
      }
    },
    addSviTelefoniIDs(state, niz){
      state.sviTelefoniIDs = niz;
    },
  },
  actions: {
    async fetchBrendovi({commit}){
      fetch(`http://localhost:9000/brend`)
        .then( res => res.json() )
        .then( data => commit('addBrendovi', data) );
    },
    async getTelefon({commit, state}, telefonID){
      return new Promise((resolve)=>{

        if(state.telefoni[telefonID]){
          resolve(state.telefoni[telefonID]);
        }
        else{
          fetch(`http://localhost:9000/telefon/${telefonID}`)
            .then( res => res.json() )
            .then( data => {
              commit('addTelefon', data);
              resolve(data);
            });
        }
      });
    },
    async fetchSviTelefoni({commit}){
      fetch("http://localhost:9000/telefon")
        .then( res=>res.json() )
          .then( data=> commit('addSviTelefoniIDs', data) )
    },
  },
  modules: {
  }
})
