
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let meridian = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12 && mm > 0) {
    hh = hh - 12;
    meridian = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;

  document.getElementById("time").innerText = time;
  document.getElementById("session").innerHTML = meridian;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Day = new Date();

let dayName = day[Day.getDay()];
let monthName = month[Day.getMonth()];
let dateNo = Day.getDate();
let descript = dayName + " , " + monthName + " " + dateNo;
document.querySelector(".day").innerText = descript;
