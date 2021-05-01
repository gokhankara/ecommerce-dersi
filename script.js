var app = new Vue({
  el: "#app",
  data: {
    tarih: new Date().getTime(),
    number: 6,
    users: [{ ad: "ayhan" }, { ad: "ahmet" }, { ad: "mehmet" }],
    isChecked: false,
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
});
