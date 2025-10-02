<template>
    <div>
        <AppHeader title="Brendovi nasih telefona"/>
        <b-pagination
          v-model="currentPage"
          :total-rows="this.brendovi.length"
          :per-page="perPage"
          aria-controls="tabelaBrendovi"
        ></b-pagination>

        <b-table
          striped
          hover
          :items="this.brendovi"
          :fields="fields"    
          :per-page="perPage"
          :current-page="currentPage"
          id="tabelaBrendovi">
            <template #cell(logo)="data">
              <img v-if="data.value" :src="`${data.value}`" />
            </template>
        </b-table>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppHeader from '@/components/AppHeader.vue'


export default {
  name: 'BrendView',
  components: {
    AppHeader
  },
  data(){
    return{
        perPage:10,
        currentPage: 1,

      fields: [
        {
          key: "naziv",
          sortable: true,
          label: "Brend"
        },
        {
          key: "logo",
          label:"",
          formatter: value=>{
              if(value)
                return "http://localhost:9000/brend"+value;
              else 
                return null;
          }
        }
      ],

    }
  },
  computed:{
            ...mapState([
              'brendovi'
           ])

  },
  mounted(){
    this.fetchBrendovi();
    
  },
  methods: {
      ...mapActions([
        'fetchBrendovi'
      ])
  },

}
</script>

<style scoped>
    .table{
        text-align:left;
    }


</style>