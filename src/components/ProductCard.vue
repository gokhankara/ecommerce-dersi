<template>
    <b-card
    :img-src="image"
    :img-alt="title"
    img-top
    class="mb-2"
  >
    <div> {{title}} </div>
    <b-button :to="link" variant="primary">Detay</b-button>
  </b-card>
</template>

<script>
export default {
    name:'ProcuctCard',
    props:{
        product :Object,
        
    },
    computed:{
        title(){
            return this.product.title
        },
        id(){
            return this.product.id
        },
        image(){
            return this.product.image
        },
        price(){
            return this.product.price
        },
        category(){
            return this.product.category
        },
        link(){
            return `/pd/werwer-p-${this.product.id}`
        }
    }
}
</script>

<style scoped>
.card {
    width: 200px;
}

.card img{
    padding: 10px;
    height: 200px;
    max-width: 200px;
}
</style>