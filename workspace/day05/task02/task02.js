

// html의 최상의 객체 document의 change 태그를 가져온다.
// addEventListenerd 함수에 매개변수("click", callback 함수를 넘겨준다.
// callback 함수는 getresult함수의 callback을 실행한다.
document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});

// changeToHangle함수는 매개변수 number를 받는다.
// 함수 gerResult함수는 매개변수로 callback을 받는다.


// changeToHangle은 number를 매개변수르 받아서 한글로 출력하는 함수이다.
// 예사 ==> 입력 : 1654 ->  출력 : 일육오사 
function changeToHangle(number) {
    // div#round를 numbering에 담아준다.
    const numbering = document.querySelector("div#round");
    console.log(numbering);
    // #result를 reusltTag에 담아준다.
    const resultTag = document.querySelector("#result");
    // 객체 hangle에 "공~~구"를 초기화해준다.
    const hangle = "공일이삼사오육칠팔구";
    // result, temp, check 지역변수들을 초기화 한다.
    let result = "", temp = "", check = false;

    // 만약 number가 숫자가 아니면 false 그리고 number 문자를 쪼개 '.'과 동일하다면 
    if(isNaN(number) || number.charAt(0) == '.'){
        // reusltTag의 innerHTML에 "~"를 담아준다.
        resultTag.innerHTML = "숫자만 입력해주세요.";
        // numbering의 innerHTML에 4를 담아준다.
        numbering.innerHTML = "4";
        // 실행하는 함수를 멈춰준다. => return을 통해 함수를 멈춰준다. 아래로 내려주는 것을 멈춰준다.
        return;
    }
        // 만약 number 가 1보다 크다면
    if(number < 1) {
        // reuslt값에 "영"을 담아준다.
        result = "영";
    }
        // for문을 통해 number의 개수만큼 i가 증가
        for(let i in number) {
        // for( let i = 0; i < number.length; i++)
        
            // 지역변수 temp에 hangle 배열에 number.문자(i)의 인덱스를 담아준다.
            temp = hangle[number.charAt(i)];
        
            //만약 i가 0과 같거나 result의 값이 "영"과 같다면
            if(i == 0 && result == "영"){
                // 탈출해 밑으로 내려가지 못하게 한다. 다시 for문을 반복
                continue;
            }

            // 만약 temp가 undefined라면 
            if(!temp) {
                check = true;``
                // result에 점을 더해준다.
                result += "점";
                // 탈출해 밑으로 내려가지 못하게 한다. 다시 for문을 반복
                continue;
            }

            // result에 tmep 값을 더해준다.
            result += temp;

            // number.ineerHtml에 3을 담아준다.
            numbering.innerHTML = "3";
        
            // 만약 check이
            if(check){
            // numbering.innerHtml에 2를 담아준다.
            numbering.innerHTML = "2";
            }
        }
    // resultTag.innerHTML에 result를 출력한다.
    resultTag.innerHTML = result;
}

    // 함수 getResult는 매개변수로 (callback)함수를 받아온다.
    function getResult(callback){
        // 객체 input에  querySelecotr함수를 통해 "input[name='input]".value를 담아준다.  
        const input = document.querySelector("input[name='input']").value;
        // callback이 있다면 
        if(callback){
            // callback에 input을 담아준다.
            callback(input);
    }
}