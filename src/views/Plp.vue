<template>
  <div>
    Plp
    {{ category }}
    <b-row v-if="loaded">
      <b-col v-for="product in products" :key="product.id">
        <product-card :product="product" />
      </b-col>
    </b-row>
    <b-row v-else> Loading... </b-row>
  </div>
</template>

<script >
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      loaded: false,
        cat: null,
      products: [],
    };
  },
  computed: {
    category() {
      return this.cat ? `Su anda ${this.cat} katgorisini goruyorsunuz` : "";
    },
  },
  methods: {
    async fetchData() {
      await this.axios
        .get(
          "/products" + (this.cat ? "/category/" + this.cat : "")
        )
        .then(({ data }) => {
          this.products = data;
        });
    },
  },
  async mounted() {
    this.cat = this.$route.params.categoryId;
    await this.fetchData();
    this.loaded = true;
  },
};
</script>