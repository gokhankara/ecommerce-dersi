<template>
  <b-card>
    <b-row>
      <b-col>
        <img :src="product.image" alt="" />
      </b-col>
      <b-col>
        {{ product.title }}
        quantity: {{quantity}}
      </b-col>
      <b-col>
        {{ product.price }}
      </b-col>
      <b-col>
        <b-button @click="removeFromCart"> delete </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    productId: {},
    quantity: Number,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    removeFromCart() {
      this.$emit("remove", this.product.id);
    },
  },
  async mounted() {
    const { data } = await this.axios.get(
      "/products/" + this.productId
    );
    this.product = data;
  },
};
</script>

<style scoped>
img {
  width: 20px;
}
</style>