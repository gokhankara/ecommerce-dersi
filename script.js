var app = new Vue({
  el: "#app",
  props:["name"],
  data: {
    tarih: new Date().getTime(),
    number: 6,
    users: [{ ad: "ayhan" }, { ad: "ahmet" }, { ad: "mehmet" }],
    isChecked: false,
  },
  template:'<div>  {{ tarih }} {{name}}  <div v-if="number<5">küçüktür 5</div>  <div v-else-if="number === 5">5 e eşit</div>  <div v-else>büyüktür 5</div>  <div v-for="(user, index) in computedUser" :key="user">    {{ index + user }}  </div>  <input type="text" :value="tarih" @keyup="handleChange" />  <input type="text" v-model="tarih" />  <button @click="merhaba" @mouseover="onHover">merhaba de</button>  <input type="checkbox" name="ch1" id="ch1" v-model="isChecked" />  {{isChecked}}  <hr>  {{tarihComputed}}  </div>  ',
  created(){
      console.log("created");
      debugger
  },
  beforeMount(){
    console.log("beforeMount");
    debugger
  },
  mounted(){
    console.log("mounted");
    debugger
  },

  computed: {
      tarihComputed() {
          return Date.now();
      },
      computedUser(){
          return this.users.map(user=>user.ad)
      }
  },
  methods: {
    merhaba() {
      console.log("merhaba");
    },
    onHover() {
      console.log("merhabanın üzerine gelindi.");
    },
    handleChange({ target: { value } }) {
      ///var regex = new RegExp(/[0-9]+/,"g")
      //if (value.match(regex)){
      console.log(value);
      this.tarih = value;
      //}
    },
  },
  watch:{
    isChecked:(oldValue,newValue)=>{
        console.log(`checked changed from ${oldValue} to ${newValue}`);
    }
  }
});
