var arr1 = [1,2,3]
for (var i= 0; i < arr1.length; i++ ){
    arr1[i] = arr1[i]+1;
}
console.log(arr1);

console.log( [1,2,3].map(function(i,index){return i+1}) ) 

console.log( [1,2,3].map(i=>i+1)) 

function f1 (){}

var f2 = function(){}

var f2 = ()=>{}

// array methods 

map // array elemanlarının üzerinde gezerek tek tek elemanlar üzerinde verilen fonksiyonu çalıştırıp return edilen değeri üztüne yazar.
forEach // array elemanlarını tek tek işleme alır, 
find // array içerisinde verilen fonksiyona true dönen ilk elemanı verir
filter // array içerisinde verilen fonksiyona true dönen tüm elemanları verir
reduce // array içerisinde iterate ederek son bir değer oluşturmaya yarar 
concat //arrayleri birleştirir
flat // arraylerin içerisindeki arraylarin üst arraye taşınmasını sağlar


pop
unshift
shift
push

/* var arr2=[];

var arr1 =  [1,2,3];

arr1.forEach((i, index)=>arr2[index] = i*3)

var musteriler = [{
    isim: "ali",
    soyisim: "kemal"
},{
    isim: "hasan",
    soyisim: "can"
}]

var musteriAdSoyadlari = [];

musteriler.forEach((m, i)=>musteriAdSoyadlari[i]=  m.isim + " " + m.soyisim)

var musteriAdSoyadlari2 = musteriler.map((m)=> m.isim + " " + m.soyisim)
 */

/*
var arr =[
    {
        id: 234234,
        gender: "male",
        cari: 10000
    },
    {
        id: 45645,
        name:"ayhan",
        gender: "male",
        cari: 20000
    },
    {
        id: 345345,
        name:"aylin",
        gender: "female",
        cari: 30000
    },

]

arr.filter(el=>{
    return el.gender === "male"
})
arr.find(el=>{
    return el.gender === "male"
})

arr.filter(el=>{
    return el.gender === "male"
}).map(el=>{return { ...el, status: true}})

arr.find(el=>{
    return el.id === 345345;
})

var arr ={
    234234: {
        id: 234234,
        gender: "male"

    },
    45645: {
        id: 45645,
        name:"ayhan",
        gender: "male"
    },
    345345: {
        id: 345345,
        name:"aylin",
        gender: "female"
    },
}

var musteriId = 345345;
arr[musteriId];
*/
/*
var arr =[
    {
        id: 234234,
        gender: "male",
        cari: 10000
    },
    {
        id: 45645,
        name:"ayhan",
        gender: "male",
        cari: 20000
    },
    {
        id: 345345,
        name:"aylin",
        gender: "female",
        cari: 30000
    },
    {
        id: 345,
        name:"aylin",
        gender: "female",
        cari: 100000
    },
]
arr.reduce((onceki,sonraki) => {
    return onceki + sonraki.cari
}, 0);


arr.reduce((onceki,sonraki)=>{
    onceki[sonraki.id] = sonraki;
     return onceki;
}, {})


arr.reduce((onceki,sonraki)=>{
    if (sonraki.gender ==="female"){
      onceki[sonraki.id] = sonraki;
      onceki.total += sonraki.cari
    }
    return onceki;
}, {total:0})

// concat
var arr1 = [1,2,3], arr2 = [5,6,7];
arr1.concat(arr2);

// flat
var multiDarr = [["ali","hasan",["veli",["ahmet"]]],["ayşe", "fatma"]];

multiDarr.flat();
multiDarr.flat(Infinity)
*/

var arr1 =  [1,2,3,4,5,6];

arr1.pop(); //son elemanı alır
arr1.shift(); //ilk elemanı alır
arr1.push(); //sona eleman ekler
arr1.unshift(6); //başa eleman ekler

var arr1 =  [1,2,3,4,5,6];


arr1.slice(0)
//(6) [1, 2, 3, 4, 5, 6]
arr2 = arr1.slice(0)
//(6) [1, 2, 3, 4, 5, 6]
arr2.pop()
//6
arr2
//(5) [1, 2, 3, 4, 5]
arr1
//(6) [1, 2, 3, 4, 5, 6]


var index = arr1.findIndex(4);