//js code for digital clock will go here--- Test
setInterval(() => {
  let clock = document.getElementById("clock");
  let dayDisplay = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  let cDate = date.getDate();
  let cMonth = date.getMonth() + 1;
  let cYear = date.getFullYear();

  let day = date.getDay();

  let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (hours < 12) {
    document.getElementById("amOrpm").innerHTML = "AM";
  } else {
    document.getElementById("amOrpm").innerHTML = "PM";
  }

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;

  month.innerHTML = `${cMonth} - ${cDate} -`;

  dayDisplay.innerHTML = `${daysName[day]} | `;

  year.innerHTML = `${cYear}`;
}, 1000);
