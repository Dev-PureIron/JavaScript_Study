//상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JOSN 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.


// function product(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
// }

//     let products = new Array() [
//         new product("사과", 3000, 5),
//         new product("배", 4000, 3),
//         new product("딸기", 5000, 5)
// ];

    // let product = {name: "지우개", price: 300, stock: 5};

    // let productsJSON = JSON.stringify(product);
    
    // let file = require('fs');
    
    // file.writeFile('product.json', productsJSON,'utf-8', function(error){
    // file.writeFile('product.json', JSON.stringify(product),'utf-8', function(error){
        
        //     if(error){
            //         console.log(error);
            //     } else {
                //         console.log("성공!");
                //     }
                // });

                // file.writeFile('product.json', JSON.stringify(product),'utf-8', error => {});

//     file.readFile('product.json', 'utf-8', function(error, content) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(content);
//     }
// });