// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.


// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = new Array(
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
)

let productsJSON = JSON.stringify(products);

let file = require('fs');

//   file.writeFile('shop.json', JSON.stringify(products),'utf-8', function(error){
        
//     if(error){
//         console.log(error);
//     } else {
//         console.log("성공!");
//     }
//     });

// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

// file.readFile('shop.js', 'utf-8', function(error, content) {
//     // 총 가격
//     let totalPrice = products.map(product => product.price).reduce((totalPrice, price) => totalPrice += price);
//     // 총 재고 수
//     let totalStock = products.map(product => product.stock).reduce((totalStock, stock) => totalStock += stock);
//     let result = {totalPrice : totalPrice, totalStock : totalStock};



//     file.writeFile('sum.json',JSON.stringify(result) ,'utf-8', function(error, content){
//         if(error){
//                     console.log(error);
//                 }else{
//                     console.log("성공!");
//                 }
//     })
// })


    file.readFile('sum.json','utf-8',function(error,content){
        if(error){
                    console.log(error);
                } else {
                    console.log(JSON.parse(content));
                }
                });







// function Product(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
// }

// let products = [
//     new Product('참후레쉬', 1500, 90),
//     new Product('참후레쉬', 1500, 60),
//     new Product('참후레쉬', 1500, 30)
// ];

// let productsJSON = JSON.stringify(products);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});





// function Product(name, price, stock){
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.toJSON = JSON.stringify(this);
// }

// 3개의 Object를 1개의 Array객체에 모두 담는다.
// JSON으로 변경시킨다.
// let products = new Array(new Product('인형', 3000, 20).toJSON,
// new Product('가방', 50000, 15).toJSON,
// new Product('신발', 90000, 27).toJSON);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// function getTotal(inputProducts){
//     inputProducts = JSON.parse(inputProducts);
//     inputProducts.map(e => e.price * e.stock).forEach(total => console.log(total));
// }

// getTotal(products);