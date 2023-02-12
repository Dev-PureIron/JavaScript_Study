/* 
    task01.html
*/

// 전역변수
globalThis.temp;

// confirm함수
function confirm() {
    // input태그의 input.value 값을 input 객체에 담아준다.
    const input = document.querySelector("input").value;
    // tbody의 tr태그를 trs 객체 담아준다.
    const trs = document.querySelectorAll("tbody tr");
    // 지역변수 cehck를 false로 초기화 
    let check = false;

    
    if(globalThis.temp) {
        // 전역변수 temp의 접근
        globalThis.temp.style.background = "#fff";
        // 전역변수 temp의 첫번째 자식 html에 replace함수를 사용해 첫번째 열에 ("★", ""); 넣어준다.
        globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    }

        // trs 객체를 forEach 돌려서 
    trs.forEach(tr => {
        // 지역변수 td에 tr의 첫번째 자식 요소를 넣어준다.
        let td = tr.firstElementChild;
        // td의 innerHtm과 input의 값이 같다면
        if(td.innerHTML == input) {
        // check을 true로 변환
            check = true;
        // 전역 변수 temp에 tr을 담아준다.
            globalThis.temp = tr;
            // tr객체에 접근해 배경색을 변경해준다.
            tr.style.background = "#ef5350";
        // td.innerHTML에 별과 기존 값을 더해서 담아준다.
            td.innerHTML = "★" + td.innerHTML;
        }
    });
    
    // 위의 if문에 충족시키지 않으면 
    // 기존 check가 false로 초기화되있기에 -> !check는 true라면 alert 오류 메시지를 출력
    if(!check) {
        alert("다시 시도해주세요.");
    }
}