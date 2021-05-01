// function
// function f1 (){}

// variable
// var1 = undefined
// f2 = undefined

// let const
// let1
// const1

//--------
f1();
f2 && f2();
console.log(var1);
//console.log(const1);

var var1 = 1;
function f1() {}
var f2 = function () {
  console.log(123);
};
let let1 = "";
const const1 = "";

f2 && f2();

["", null, undefined, 0, {}, []];

// operators
/*
< küçüktür
<= küçük eşit
> büyüktür
>= büyük eşit
== eşittir
=== dönüştürmesiz eşittir (with out type coersion)
|| yada 
&& ve
! değili
-- eksikt
++ arttır
-n n eksilt
+n n arttır
? ternary operator
*/

/*function isFalse(deger1){
    if(deger1 == false){
        console.log("deger false dur");
    } else {
        console.log("deger false değildir");
    }
}
*/

//kuşul ? (true ise çalışacak kod) : (false ise çalışacak)

for (let i = 0; i < 10; i++) {
  i > 5 || i == 0
    ? console.log("5 ten büyük yada 0")
    : i < 4
    ? console.log("4 ten küçük")
    : console.log("4ten büyük 5 ten küçük");
}
for (let i = 0; i < 10; i++) {
  if (i > 5 || i == 0) {
    console.log("5 ten büyük yada 0");
  } else {
    if (i < 4) {
      console.log("4 ten küçük");
    } else {
      console.log("4ten büyük 5 ten küçük");
    }
  }
}
