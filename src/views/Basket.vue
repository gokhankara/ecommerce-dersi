<template>
  <div>
    <h1>Basket</h1>
    <b-row v-for="product in products" :key="product.id">
      <ProductLineItem :productId="product.productId" :quantity='product.quantity' @remove="handleRemoveFromCart" />
    </b-row>
  </div>
</template>

<script>
import ProductLineItem from "@/components/ProductLineItem.vue";
export default {
  components: { ProductLineItem },
  computed: {
    products() {
      return this.$store.state.basket.products
    },
  },
  methods: {
    handleRemoveFromCart(id) {
      this.$store.dispatch('REMOVE_FROM_BASKET',id)
    },
  },
  async mounted(){
    await this.$store.dispatch('FETH_CART');
  }
};
</script>