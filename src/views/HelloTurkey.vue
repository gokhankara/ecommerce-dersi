<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <div v-for="product in products" :key="product.id">
      <BButton size="lg" @click="() => handleClick(product.id)">Button</BButton>
    </div>

    <BButton size="lg" @click="handleClick">Button</BButton>

    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
    <div class="mt-2">Value: {{ comp1 }}</div>
    <div class="mt-2">Value: {{ msg }}</div>
    <div class="mt-2">Value: {{ roundMe(123123.4564) }}</div>

    <h1>Hello App!</h1>
    <p>
      <router-link to="/">World</router-link>
    </p>

    <user-card>
      <BButton size="lg" @click="() => handleClick(123)">Button</BButton>
    </user-card>

    <user-card>
      <template #name> Ayhan </template>
      <template #surname> <b>Sipahi</b> </template>
    </user-card>

    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"
      >Open Modal</b-button
    >

    <b-modal id="bv-modal-example">
      <template #modal-title> Using <code>$bvModal</code> Methods </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <template #modal-footer>
        <b-button
          class="mt-3"
          variant="danger"
          block
          @click="$bvModal.hide('bv-modal-example')"
        >
          Kapat
        </b-button>
      </template>
    </b-modal>
    <hr />

    count : {{ count }}
    {{ $store.state.count }}
    <b-btn @click="increase">increase</b-btn>
    <br />
    <input type="number" v-model="increaseCount" />
    <b-btn @click="increaseN" variant="primary">increaseN</b-btn>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
export default {
  components: { UserCard },
  name: "HelloWorld",
  data() {
    return {
      text: "",
      products: [{ id: 1 }, { id: 2 }],
      price: 123123.125123,
      map: new Map(),
      increaseCount: 0,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    comp1() {
      return Math.round(this.price * 100) / 100;
    },
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increase() {
      this.$store.dispatch("increment");
    },
    increaseN() {
      this.$store.dispatch("increment", parseInt(this.increaseCount));
    },
    handleClick(id) {
      console.log(" clicked ", { id });
    },
    roundMe(number) {
      return Math.round(number * 100) / 100;
    },
  },
};
</script>
