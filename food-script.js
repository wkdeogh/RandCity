

const menus = [
    "스테이크", "파스타", "피자", "치킨", "초밥", "라멘", "불고기", "비빔밥", "김치찌개", "된장찌개", "카레", "팟타이", "햄버거", "샌드위치", 
    "삼겹살", "타코", "부리토", "중국집 세트", "돈가스", "커리", "피쉬 앤 칩스", "파에야", "라자냐", "잡채", "두부요리", "참치회", "꽁치구이", 
    "해산물 파스타", "고등어구이", "샐러드", "바비큐", "토마토 스파게티", "갈비찜", "수제비", "만두국", "닭갈비", "라면",
];


document.getElementById('food-startButton').addEventListener('click', function() {
    startRotating('food-startButton', 'foodLabel', 'food-resultLabel', menus);
});

function showResultLabel(selected) {
    const label = document.getElementById('food-resultLabel');
    label.textContent = selected + " 맛있게 드세요~";
}