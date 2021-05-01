var arr1 = [1,2,3];
var arr2 = [4,5,6];

arr1= [...arr1, 5];
(4) [1, 2, 3, 5]
arr1= [...arr1];
(4) [1, 2, 3, 5]
arr1= [5, ...arr1];
(5) [5, 1, 2, 3, 5]
arr1= [...arr1.filter(e=>e!==2)];
(4) [5, 1, 3, 5]

const newArr = [...arr1, ...arr2];

const func = (first ,second, ...rest)=>{
      console.log(first, second, rest)  
}
func (1,2,3,4,5,6)
// 1 2 [3, 4, 5, 6]


var obj= {
    key: "key",
    func: function(){

    }
};
var obj= {
    key,
    func(){

    }
};

const [a,b] = [1,2];

var user = {
    ad: "ayhan",
    soyad: "sipahi",
    yas: 32
};
var user2 = {
    ad: "ayhan",
    soyad: "sipahi",
};
const {ad,yas} = user
console.log(ad, yas)

function adyaz({ad,yas}) {
    //var yas = obj.yas;
    //var ad = obj.ad;
    console.log(ad, yas)
}
function adyaz2( {ad,yas=18} ) {
    //var yas = obj.yas;
    //var ad = obj.ad;
    console.log(ad, yas)
}

function addToBasket({productId, count=1}){
    
}