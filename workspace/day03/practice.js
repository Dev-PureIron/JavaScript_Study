/* 숙제  리듀스 두번 써야함*/
// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.

// let productsJSON = JSON.stringify(products);

// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
// let file = require('fs');
// let product = {name: '지우개', price: 300, stock: 35000};

// file.writeFile('product.json', JSON.stringify(product), 'utf-8', error => {});
// file.readFile('product.json', 'utf-8', (error, content) => {
//     console.log(JSON.parse(content));
// });


// ============================================================================================

//<<<<shop.json에 변환된 JSON 형식의 문자열을 작성한다..
//shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.>>>>

// 프로토 타입 : 프로덕트 객체를 생성 / name, price, stock이라는 프로퍼티로 
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

// products라는 Array객체를 생성 / 프로덕트라는 객체로 구성
let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

// productJSON에 담을게 / products를 JSON형식으로 바꿔줘
let productsJSON = JSON.stringify(products);

// 파일 입출력 시스템이 필요해서 file로 간단하게 쓸게
let file = require('fs');

//<<<shop.json에 변환된 JSON 형식의 문자열을 작성한다.>>>


// 파일을 작성할껀데('파일명.확장자', '내용', '인코딩', 콜백함수)
// <파일을 작성할건데 파일명은 sho.json으로  내용은 productsJSON을 넣어주고, 인코딩은 utf-8로
// 콜백함수에서는 erpror를 매개변수로 받아와줘.>
file.writeFile('shop.json', productsJSON, 'utf-8', error => { 
    
    
    // 만약 에러가 있다면, 
    if (error) {

    
        'error'를 콜솔창에 로그로 출력해줘
        console.log(error);
    } 
});

// <<<총 가격과 총 재고 수를 Object에 담은 뒤>>>

// 파일을 읽어올껀데('파일명.확장자', '인코딩', 콜백함수)
// <파일을 읽어올건데 파일명은 shop.json으로 인코딩은 utf-8로
// 콜백함수에서는 error와 content를 매개변수로 받아와줘>
file.readFile('shop.json', 'utf-8', (error, content) => {
   
    // 만약 에러가 있다면, 
    if(error){
        //'error'를 콘솔창에 로그로 출력해줘
        console.log(error);
    //에러가 없다면(성공한다면)
    }else{
        //content를 JSON 형식에서 JS Object형식 바꿔서 products에 넣어줘
        products = JSON.parse(content);     //<<<<shop.json을 읽어 온 뒤 Array 객체로 변환한다.>>>>>>
        
        
        // total이라는 객체를 생성. / totalPrice, totalStock이라는 프로퍼티로
        let total = {totalPrice: 0, totalStock: 0};
        
        //total이라는 객체 안에 있는 totalPrice라는 프로퍼티에 담아줘/ 
        total.totalPrice = 
            // products라는 Array객체 안에 있는 price라는 값에
            // 프로덕츠를 맵을 통해 프러덕트의 프로덕트 프라이스에 접근해.reduce 함수를 통해 담아준다. total에 price 값을
            products.map(product => product.price).reduce((total, price) => total + price);

        total.totalStock = products.map(product => product.stock).reduce((total,stock) => total + stock);
        // total = new Array(totalPrice, totalStock);
        //sum.json으로 출력한다

        // totalJSON은 total객체를 제이슨 형식으로 변환해서 만든 객체 
        let totalJSON = JSON.stringify(total);

        // 다시 파일을 새롭게 생성하기위해 writefile 함수를 사용
        // 파일 이름과 sum, 파일 형식은 json. 입력할 내용은 totalJSON 객체의 값을 입력. callback 함수를 통해 error 프로퍼티를  
        // 객체는 값 ? 함수는 값이 맞다. 
        file.writeFile('sum.json', totalJSON, 'utf-8', error => {
            if (error) {
                console.log(error);
            }
        })
    }
});

file.readFile('sum.json','utf-8',(error, content) => {
    if(error){
        console.log(error);
    }else {
        console.log(content);
    }
});


// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.


