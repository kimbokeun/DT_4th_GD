// 3 스케줄 등록
//    * 조건
//    1. 달력 view 만들기(html, css)
//    2. 달력에 날짜 클릭시 날짜에 input에 날짜가 채워지도록
//    3. 내용 input 에 내용 입력 후 등록버튼 누르면 달력의 날짜에 내용 추가

// 날짜 변수 선언 및 할당
let today = new Date();
let thisYear = today.getFullYear();
let thisMonth = today.getMonth() + 1;
let lastDate = new Date(thisYear, thisMonth, 0).getDate();
let firstDayOfWeek = today.getDay(`${thisYear}-${thisMonth}-01`);

// 입력영역
const inputDate = document.querySelector("#date");
const inputContents = document.querySelector("#contents");
const submitButton = document.querySelector(".submit-button");

// 달력 상단
const dateYear = document.querySelector(".date-year");
const dateMonth = document.querySelector(".date-month");
dateYear.innerText = thisYear;
dateMonth.innerText = thisMonth;

const monthEng = document.createElement("span");
dateMonth.appendChild(monthEng);
monthEng.classList.add("month-eng");
monthEng.innerText = today.toLocaleString("en-US", { month: "long" });

// 해당달의 일수만큼 li 생성
const daysArea = document.querySelector(".days-area");
const days = document.createElement("ul");
days.classList.add("days");
daysArea.append(days);
let day;
let thisDate;

for (let num = 1; num <= lastDate; num++) {
  day = document.createElement("li");
  day.classList.add("day");
  days.append(day);

  const dayNumber = document.createElement("b");
  dayNumber.classList.add("day-number");
  day.append(dayNumber);
  dayNumber.innerText = num;

  // 일요일, 토요일 색상
  let thisDay = new Date(thisYear, thisMonth - 1, num).getDay();
  if (thisDay === 0) {
    dayNumber.classList.add("sunday");
  } else if (thisDay === 6) {
    dayNumber.classList.add("saturday");
  }

  // 일정추가 버튼
  const btnAddSchedule = document.createElement("button");
  btnAddSchedule.classList.add("button-add-schedule");
  btnAddSchedule.innerText = "일정추가";
  day.append(btnAddSchedule);

  // 일정추가 버튼 클릭시 '날짜'란에 해당날짜 노출
  btnAddSchedule.addEventListener("click", function () {
    thisDate = this.previousElementSibling.innerText;
    if (thisDate < 10) {
      inputDate.value = `${thisYear}-${thisMonth}-0${thisDate}`;
    } else {
      inputDate.value = `${thisYear}-${thisMonth}-${thisDate}`;
    }
  });
}


// 등록 버튼 클릭 이벤트
submitButton.addEventListener("click", function () {
  
  const scheduleItem = document.createElement("a");
  scheduleItem.href = "#";
  scheduleItem.classList.add("schedule-item");
  
  const dayArray = Array.from(days.childNodes);
  let i = thisDate - 1;

  if (inputContents.value != "") {
    dayArray[i].append(scheduleItem);
    scheduleItem.innerText = inputContents.value;
  }

  inputContents.value = "";
  inputDate.value = "";
});
