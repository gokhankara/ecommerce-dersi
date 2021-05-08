<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
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
    <div v-for="product in products" :key="product.id" >
    <BButton size='lg' @click="()=> handleClick(product.id)">Button</BButton>
    </div>

    <BButton size='lg' @click="(id)=> handleClick(id)">Button</BButton>

    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
    <div class="mt-2">Value: {{ comp1 }}</div>
    <div class="mt-2">Value: {{ msg }}</div>
    <div class="mt-2">Value: {{ roundMe(123123.4564) }}</div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: '',
      products:[{id:1},{id:2}],
      price: 123123.125123,
      map: new Map()
    }
  },
  props: {
    msg: String,
  },
  computed:{
    comp1(){
      return Math.round(this.price*100)/100;
    }
  },
  methods:{
    handleClick(id ){
      console.log(' clicked ', {id})
    },
    roundMe(number){
      return Math.round(number*100)/100;
    }
  }
};
</script>
