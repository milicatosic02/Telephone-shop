<template>
  <div>

    <AppHeader :title="headerTitle"/> 
    <button @click="prev()">Prethodno</button>
    ...
    <button @click="next()">Sledece</button>
    <TelefonList v-if="sviTelefoniIDs" :telefoniIDs="sviTelefoniIDs.slice(current*10, current*10+10)"/>
    <p v-else>Lista još nije spremna</p>

  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import TelefonList from '../components/TelefonList.vue'
import { mapActions, mapState } from 'vuex';


export default {
  name: 'App',
  components: {
    AppHeader,TelefonList
  },
  data(){
    return{
      headerTitle: "Telefoni",
      current: 0
    }
  },
  methods:{
    ...mapActions([
      'fetchSviTelefoni'
    ]),

    next(){
      if( this.current * 10 < this.sviTelefoniIDs.length ){
        this.current++;
      }
    },
    prev(){
      if( this.current > 0){
        this.current--;
      }
    },

  },
  mounted(){
    this.fetchSviTelefoni();

  },
  computed:{
    ...mapState([
      'sviTelefoniIDs'
    ])
  },



}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
