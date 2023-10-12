// Create a digital seconds clock using setInterval and date object in JS. The date object can be used to get the date, time, hours and seconds which can be update using setInterval. Try to keep UI good looking.

currentTime = setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    let a = document.getElementById("hr");
    a.innerHTML = (hour < 10 ? "0" : "") + hour;
    let b = document.getElementById("min");
    b.innerHTML = (minute < 10 ? "0" : "") + minute;
    let c = document.getElementById("sec");
    c.innerHTML = (second < 10 ? "0" : "") + second;
  }, 1000);
  