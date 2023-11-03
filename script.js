let startTime = new Date().getTime(); //(자바스크립트 실행 시작시긴)

window.onload = function () {
  let endTime = new Date().getTime(); // 페이지가 완전히 로드된 시간
  let timeTaken = endTime - startTime; // 페이지 로딩에 걸린 시간

  // 시간을 초로 변환하여 표시
  let timeInSeconds = (timeTaken / 1000).toFixed(2);
  document.getElementById("loadTime").textContent = "페이지 로딩 시간: " + timeInSeconds + "초";
};

function updateTime() {
  const currentTime = new Date();
  const userLang = navigator.language || navigator.userLanguage;
  const timeLabels = userLang.startsWith("ko")
    ? { hour: "시", minute: "분", second: "초", millisecond: "ms" }
    : { hour: "h", minute: "m", second: "s", millisecond: "ms" };

  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");
  const milliseconds = String(currentTime.getMilliseconds()).padStart(3, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("hour-label").textContent = timeLabels.hour;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("minute-label").textContent = timeLabels.minute;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("second-label").textContent = timeLabels.second;
  document.getElementById("milliseconds").textContent = milliseconds;
  document.getElementById("millisecond-label").textContent = timeLabels.millisecond;
}

function displayDateAndDay() {
  const now = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = days[now.getDay()];
  const dateString = now.toLocaleDateString();
  document.getElementById("date").innerHTML = `${dateString} (${dayName})`;
}
displayDateAndDay();
// 30밀리초마다 updateTime 함수를 호출
setInterval(updateTime, 30);
