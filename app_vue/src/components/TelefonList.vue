<template>
    <div>
        <TelefonSingle v-for="telefon in telefoni" 
			:key="telefon.id" :telefon="telefon"/>

    </div>
</template>

<script>
import TelefonSingle from '@/components/TelefonSingle.vue';
import { mapActions } from 'vuex';
export default {
    name: 'App',

    components: {
        TelefonSingle
    },
    data(){
        return{
            telefoni:[]
        }
    },
    methods: {
      ...mapActions([
        'getTelefon'
      ])
    },

    props: {
        telefoniIDs: Array
    },
    mounted(){
    this.getTelefon(this.$route.params.id)
      .then( res => {
        this.telefon = res;
      });
    },

    watch: {
        telefoniIDs(nVal) {
            this.telefoni = [];

            nVal.map( obj => {
                this.getTelefon(obj.id)
                .then(telefon => this.telefoni.push(telefon));
            });
        }
    },
}
</script>

<style scoped>
    .header{
        font-family: 'Gloock', serif;
         text-align: center;
    }
</style>