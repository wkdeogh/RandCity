const cities = [
    
    // 전라도
    "전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "목포시", "여수시", "순천시", "나주시", "광양시",

    // 경상도
    "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", 

    // 충청도
    "청주시", "충주시", "제천시", "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "세종시",

    // 강원도
    "춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시",

    // 경기도
    "수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "남양주시", "화성시", "평택시", "의정부시", "시흥시", "파주시", "광명시", "김포시", "광주시", "이천시", "양주시", 
    "오산시", "구리시", "안성시", "포천시", "의왕시", "하남시", "여주시",

    // 특별광역시
    "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시",

    // 제주도
    "제주시", "서귀포시",

    // 군
    // 전라도
    "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군",
    "고창군", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "진안군",

    // 경상도
    "거창군", "고성군(경남)", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", 
    "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군",

    // 충청도
    "금산군", "부여군", "서천군", "예산군", "청양군", "태안군", "홍성군", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군",

    // 강원도
    "고성군(강원)", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군",

    //경기도
    "가평군", "양평군", "연천군"

];


const cityLabel = document.getElementById('cityLabel');
const startButton = document.getElementById('startButton');
const resultLabel = document.getElementById('resultLabel');
let currentIndex = 0;
let running = false;
let updateInterval = 100; // 초깃값: 100ms

function updateLabel() {
    if (running) {
        currentIndex = (currentIndex + 1) % cities.length;
        cityLabel.textContent = cities[currentIndex];
        setTimeout(updateLabel, updateInterval);
    }
}

function startRotating() {
    shuffleArray(cities);
    running = true;
    startButton.disabled = true;
    updateInterval = 100; // 다시 초깃값으로 설정
    cityLabel.style.color = 'black';
    cityLabel.style.fontSize = '50px';
    resultLabel.textContent = " ";
    updateLabel();
    setTimeout(slowDown, 5000); // 5초 후에 느려짐 시작
}

function slowDown() {
    // 느려지는 로직
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            updateInterval += 10 * i; // 업데이트 간격을 점점 늘림
        }, 500 * i); // 0.5초마다 간격을 늘림
    }

    // 최종 선택된 도시를 표시하고 멈추는 로직
    setTimeout(() => {
        setTimeout(()=>{
            running = false;
            let selectedCity = cities[currentIndex];
            cityLabel.textContent = `⭐️ ${selectedCity} ⭐️`;
            cityLabel.style.color = 'red';
            // cityLabel.style.fontSize = '70px';
            resultLabel.textContent = `${selectedCity} 당첨~`;
            startButton.disabled = false;
        }, 1700)
    }, 500 * 20); // 전체 느려지는 과정이 끝난 후
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

startButton.addEventListener('click', startRotating);
