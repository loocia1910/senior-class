let slideIndex = 1;
let myTimer;
let slides = document.getElementsByClassName('slides');



// **전후 슬라이드 컨트롤
function plusSlides(n) {
    console.log('plusSlides n--', n);
    // 이전 myTimer 반복을 중단
    clearInterval(myTimer); 


    if( n < 0 ) {
        showSlides(slideIndex -=1)
    } else if( n >= slides.length ) {
        showSlides(slideIndex =1)
    } else {
        showSlides(slideIndex +=1)
    }

    // 반복 재개
    if(n < 0) {
        // 이전 화살표 버튼이 눌렸을 때
        // 한칸 이후 슬라이드로 넘어가야 함으로 plusSlides의 전달인자를 0보다 더 큰 수로 만듦
        myTimer = setInterval(() => plusSlides(n+2), 4000);
    } else if( n >= slides.length ) {
        myTimer = setInterval(() => plusSlides(1), 4000);
    } else {
        myTimer = setInterval(() => plusSlides(n+1), 4000);
    }
}


// **해당 슬라이드 보여주기
function showSlides() {
    let i;
    
    // 모든 요소를 보이지 않도록 함
    for(i = 0; i <  slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // 현재 인덱스에 해당하는 슬라이드만 보여줌
    slides[slideIndex -1].style.display = 'block';
}

// **슬라이드 움직임 중단
function pause() {
    clearInterval(myTimer);
}


// **슬라이드 움직임 재개
function  resume () {
    clearInterval(myTimer);
    myTimer = setInterval(() => plusSlides(slideIndex), 4000)
}

// **슬라이드 이전/다음 
function  prevORNext (val) {

    pause();

    slideIndex = slideIndex + val;
    if(slideIndex <= 0 ) {
        slideIndex = 3;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    showSlides()
    pause();
    
    // 4초 후 슬라이드 다시 실행
    myTimer = setInterval(() => plusSlides(slideIndex), 4000);
}

