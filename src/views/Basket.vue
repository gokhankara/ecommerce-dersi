<template>
  <div>
    <h1>Basket</h1>
    <b-row v-for="product in products" :key="product.id">
      <ProductLineItem :product="product" @remove="handleRemoveFromCart" />
    </b-row>
  </div>
</template>

<script >
import ProductLineItem from "@/components/ProductLineItem.vue";
export default {
  components: { ProductLineItem },
  computed: {
    products() {
      let productLineItems = window.localStorage.getItem("basket");
      productLineItems = JSON.parse(productLineItems) || [];
      return productLineItems;
    },
  },
  methods: {
    handleRemoveFromCart(id) {
      let productLineItems = JSON.parse(window.localStorage.getItem("basket"));
      debugger
      const filteredProducts = productLineItems.filter((p) => {
        return p.id !== id;
      });
      window.localStorage.setItem("basket", JSON.stringify(filteredProducts));
    },
  },
};
</script>