document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const calendarHeader = document.getElementById("calendar-header");
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let currentDate = new Date(); // 현재 날짜로 초기화

    function updateHeader(date) {
        const options = { year: 'numeric', month: 'long' };
        calendarHeader.textContent = date.toLocaleDateString('ko-KR', options);
    }

    function generateCalendar(selectedDate) {
        calendar.innerHTML = ""; // 기존 캘린더 내용 제거

        const startDate = new Date(selectedDate);
        startDate.setDate(startDate.getDate() - Math.floor(7 / 2)); // 선택된 날짜를 중앙에 배치

        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            if (date.toDateString() === selectedDate.toDateString()) {
                dayDiv.classList.add("selected");
            }
            dayDiv.innerHTML = `${date.getDate()}<br>${daysOfWeek[date.getDay()]}`;
            dayDiv.addEventListener("click", () => {
                generateCalendar(date); // 새로운 날짜 생성
                updateHeader(date); // 헤더 업데이트
            });
            calendar.appendChild(dayDiv);
        }
        updateHeader(selectedDate); // 선택된 날짜로 헤더 업데이트
    }

    // Infinite scroll logic
    let isLoading = false;

    function handleScroll() {
        if (isLoading) return;

        const container = document.getElementById("calendar-container");
        const { scrollLeft, scrollWidth, clientWidth } = container;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
            // 스크롤이 오른쪽 끝에 가까워지면 다음 날짜 로드
            isLoading = true;
            loadNextDays();
            setTimeout(() => (isLoading = false), 1000); // Prevent rapid calls
        } else if (scrollLeft <= 10) {
            // 스크롤이 왼쪽 끝에 가까워지면 이전 날짜 로드
            isLoading = true;
            loadPreviousDays();
            setTimeout(() => (isLoading = false), 1000); // Prevent rapid calls
        }
    }

    document
        .getElementById("calendar-container")
        .addEventListener("scroll", handleScroll);

    // 초기화
    generateCalendar(currentDate);
});


// 현재 시간 표시 함수
function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTimeString = `${hours}:${minutes}`;
    document.getElementById('current-time').textContent = currentTimeString;
}

// 현재 시간 표시 초기 호출
displayCurrentTime();


// HTML 요소들을 가져오기
const mySelect = document.getElementById('mySelect');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');


// 초기화할 때 div2의 초기 내용 저장
const initialDiv2Content = div2.innerHTML;

// select 요소의 onchange 이벤트 핸들러 설정
mySelect.addEventListener('change', function () {
    const selectedOption = mySelect.value;


    if (selectedOption === 'option1') {
        // 다른 옵션이 선택된 경우 div2를 숨기고 초기 내용으로 복원
        div3.style.display = 'none';
        div2.innerHTML = initialDiv2Content;
        // div3의 내용을 숨기고 초기화
        div3.style.visibility = 'hidden';
    } else if (selectedOption === 'option2') {
        div3.style.display = 'none';
        div2.innerHTML = initialDiv2Content;
        div3.style.visibility = 'hidden';
    } else if (selectedOption === 'option3') {
        div3.style.display = 'none';
        div2.innerHTML = initialDiv2Content;
    } else if (selectedOption === 'option4') {
        // 옵션 4 선택 시 div3의 내용을 div2로 이동
        const div3Content = div3.innerHTML;
        div2.innerHTML = div3Content;
        div2.style.display = ''; // div2를 보이게 설정

        // div3의 내용 초기화 (선택 시 필요에 따라)
        // div3.innerHTML = '';
    } else if (selectedOption === 'option5') {
        const div3Content = div3.innerHTML;
        div2.innerHTML = div3Content;
        div2.style.display = '';
    } else if (selectedOption === 'option6') {
        const div3Content = div3.innerHTML;
        div2.innerHTML = div3Content;
        div2.style.display = '';
    }

});




// 사용자가 입력한 시간 설정 함수
function setTime() {
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const second = document.getElementById('second').value;

    // 유효성 검사 - 각 입력 필드가 숫자이고 범위 내에 있는지 확인
    if (isNaN(hour) || isNaN(minute) || isNaN(second) ||
        hour < 0 || hour > 23 ||
        minute < 0 || minute > 59 ||
        second < 0 || second > 59) {
        alert('올바른 시간을 입력하세요.');
        return;
    }

    // 입력된 시간으로 시간 설정
    const newTime = new Date();
    newTime.setHours(parseInt(hour, 10));
    newTime.setMinutes(parseInt(minute, 10));
    newTime.setSeconds(parseInt(second, 10));

    // 설정된 시간을 표시
    const hours = String(newTime.getHours()).padStart(2, '0');
    const minutes = String(newTime.getMinutes()).padStart(2, '0');
    const seconds = String(newTime.getSeconds()).padStart(2, '0');
    const setTimeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = setTimeString;


    // 시간 입력 폼 숨기기
    document.getElementById('time-input').style.display = 'none';
}



function checkLevelBsBefore() {
    let inputValue = parseFloat(document.getElementById('recordBsBefore').value);
    let resultBox1 = document.getElementById('resultBox1');

    if (isNaN(inputValue)) {
        resultBox1.style.backgroundColor = '#FFFFFF';  // 입력 값이 숫자가 아닌 경우 흰색
    } else if (inputValue < 100) {
        resultBox1.style.backgroundColor = '#66CC66';  // 초록색 (정상)
    } else if (inputValue >= 100 && inputValue <= 126) {
        resultBox1.style.backgroundColor = '#FFFF99';  // 노란색 (경고)
    } else {
        resultBox1.style.backgroundColor = '#FF9999';  // 빨간색 (위험)
    }
}


function checkLevelBsAfter() {
    let inputValue2 = parseFloat(document.getElementById('recordBsAfter').value);
    let resultBox2 = document.getElementById('resultBox2');

    if (isNaN(inputValue2)) {
        resultBox2.style.backgroundColor = '#FFFFFF';  // 입력 값이 숫자가 아닌 경우 흰색
    } else if (inputValue2 < 140) {
        resultBox2.style.backgroundColor = '#66CC66';  // 초록색 (정상)
    } else if (inputValue2 >= 140 && inputValue2 < 200) {
        resultBox2.style.backgroundColor = '#FFFF99';  // 노란색 (경고)
    } else {
        resultBox2.style.backgroundColor = '#FF9999';  // 빨간색 (위험)
    }
}

