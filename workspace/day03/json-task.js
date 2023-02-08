// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.

function animal (name, speices, age) {
    this.name = name;
    this.speices = speices;
    this.age = age;
}

    let animals = new Array(
        new animal ("알바트로스", "조류", 150 ),
        new animal ("쿼카", "설치류", 5),
        new animal ("몽키맨", "우가우가", 27)
    )

    animalsJSON = JSON.stringify(animals);

    console.log(animalsJSON);

// 동물원의 동물 전체 평균 나이를 구한다.

    function averageAge(animalsJSON ,callback) {
         let animals = JSON.parse(animalsJSON)
         
        let total = 0;
         for(i = 0; i < animals.length; i++ ) {
            total += animals[i].age;
        }
        console.log(total);
        if(callback){
        callback(animals.length, total)
        return;
        }
        return total;
    }

    averageAge(animalsJSON, function(length, total){
       console.log(parseInt(total/length)); 
     });


     // 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

// 동물원의 동물 전체 평균 나이를 구한다.
function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));