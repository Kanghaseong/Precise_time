let t=new Date().getTime();//(자바스크립트 실행 시작시긴)
window.onload=function(){let e=((new Date().getTime()-t)/1e3).toFixed(2);// 페이지가 완전히 로드된 시간
document.getElementById("loadTime").textContent="페이지 로딩 시간: "+e+"초"},// 30밀리초마다 updateTime 함수를 호출
setInterval(function(){let t=new Date,e=navigator.language||navigator.userLanguage,n=e.startsWith("ko")?{hour:"시",minute:"분",second:"초"}:{hour:"h",minute:"m",second:"s"},o=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),m=String(t.getSeconds()).padStart(2,"0"),a=String(t.getMilliseconds()).padStart(3,"0");document.getElementById("hours").textContent=o,document.getElementById("hour-label").textContent=n.hour,document.getElementById("minutes").textContent=d,document.getElementById("minute-label").textContent=n.minute,document.getElementById("seconds").textContent=m,document.getElementById("second-label").textContent=n.second,document.getElementById("milliseconds").textContent=a+"ms"},30);//# sourceMappingURL=index.84ffd3d8.js.map

//# sourceMappingURL=index.84ffd3d8.js.map
