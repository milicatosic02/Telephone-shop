<template>
    <div class="telefon" @click="kliknutiTelefon(telefon.id)">
        <h3>{{ telefon.naziv }}</h3>
     </div>
</template>

<script>
export default {
    name: 'App',
    props: {
        telefon: Object
    },
    methods:{
        kliknutiTelefon(id){
            this.$router.push({ name: 'telefon', params: { id: id } });
        }
    }

}
</script>

<style scoped>
.telefon{
    width:150px;
    display:inline-block;
    margin:10px;
    vertical-align: top;
}
</style>