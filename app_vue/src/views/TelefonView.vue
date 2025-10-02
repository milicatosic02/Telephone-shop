<template>
  <div v-if="telefon">
    <AppHeader :title="telefon.naziv" />
    <div class="info">
      <h3 >Opis</h3>
      <p>{{ telefon.opis }}</p>

      <h3>Cena</h3>
      <p>{{ telefon.cena }}</p>

      <h3>Količina</h3>
      <p>{{ telefon.kolicina }}</p>

      <h3>Brend ID</h3>
      <p>{{ telefon.brend_id }}</p>

      <h3>Memorija ID</h3>
      <p>{{ telefon.memorija_id }}</p>
    </div>
    
    </div>
</template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue'
  import { mapActions } from 'vuex';
 
  export default {
    name: 'App',
    components: {
      AppHeader
    },
    data(){
      return{
        telefon: null
      }
    },
    methods: {
    ...mapActions([
      'getTelefon'
    ])
  },

    mounted(){
      this.getTelefon(this.$route.params.id)
      .then( res => {
        this.telefon = res;
      });

    }
  }

  </script>
  
<style scoped>
.telefon {
    text-align: left;
    background: #f44336;
    color:#fff;
}
.info {
    overflow: auto;
}

</style>