<template>
  <b-container>
    <b-row>
      <h1>{{ product.title }}</h1>
    </b-row>
    <b-row>
      <b-col> <img :src="product.image" :alt="product.title" /> </b-col>
      <b-col>
        <b-row>
          <b-col>
            <i>{{ product.category }}</i>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>{{ product.description }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col> </b-col>
          <h2>{{ product.price }}</h2></b-row
        >
        <b-btn variant="primary" @click="addToCart"> add to cart</b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script >
export default {
  data() {
    return {
      product:{},
    };
  },
  computed: {
    
  },
  methods: {
    addToCart() {
      this.$store.dispatch("ADD_TO_BASKET", this.product.id )
    },
  },
  async mounted(){
    const sku = this.$route.params.sku;
    const  { data } = await this.axios.get('/products/' + sku );
    this.product = data;
  }
};
</script>


<style scoped>
img {
  height: 200px;
  max-width: 200px;
}
</style>