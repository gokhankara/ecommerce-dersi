<template>
  <b-card>
    <b-row>
      <b-col>
        <img :src="product.image" alt="" />
      </b-col>
      <b-col>
        {{ product.title }}
        amount:1
      </b-col>
      <b-col>
        {{ product.price }}
      </b-col>
      <b-col>
          <b-button @click="removeFromCart"> delete  </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {},
  },
  methods:{
      removeFromCart(){
          this.$emit('remove', this.product.id)
      }
  }
};
</script>

<style scoped>
img {
  width: 20px;
}
</style>