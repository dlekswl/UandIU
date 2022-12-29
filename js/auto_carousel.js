// 1. 초기값 설정
var slideIndex = 0;

// 3. 자동 슬라이드 실행 함수 호출
autoSlide();

// 2. 자동 슬라이드 실행 함수
function autoSlide(){
    // alert('aaa');
    var i;
    var slide = $('.slide');
    var dot = $('.dot');
    // b. 로딩 시 슬라이드 이미지 모두 가리기(for문, eq()사용)
    for(i=0; i<slide.length; i++){
        slide.eq(i).css({display:'none'})
    }
    // c. slideIndex 값 동적으로 세팅
    slideIndex++; // = 1
    console.log(slideIndex);
    // d. 데이터 유효성 코딩 : 슬라이드 이미지 갯수보다 slideIndex 값이 초과되면 1로 세팅
    if(slideIndex > slide.length){
        slideIndex = 1;
    }
    // e. 첫 번째 슬라이드 이미지 보이도록 코딩
    slide.eq(slideIndex-1).css({display:'block'});
    // e. 첫 번째 도트에 컬러 보이도록 코딩
    dot.eq(slideIndex-1).css({backgroundColor:'#b173bc'});
    dot.eq(slideIndex-2).css({backgroundColor:'#cabccc'});

    // g. 2초마다 새로고침(재귀 호출)
    setTimeout(autoSlide,4000);
}