// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var d = date.getDay();
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
//     d = (d < 10) ? "0" + d : d;
    
//     var time = h + ":" + m + ":" + s + " " + session  +" "+ '/' +" "+ 'Day' + '=' + d;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();

// setInterval(()=>{
//     let d = new Date().toLocaleTimeString()
//     time.innerHTML = d
// },1000)



// setInterval(()=>{
//     let date = new Date();
//     let options = {
       
//          hour: "2-digit", minute: "2-digit", second:"2-digit",
//           weekday: "long", year: "numeric", month: "short",
//         day: "numeric",
//     }
//     let d = date.toLocaleTimeString("en-us", options);
//         time.innerHTML = d
// },1000)








/*
  Create a digital seconds clock using setInterval and date object in JS. The date object can be used to get the date, time, hours and seconds which can be update using setInterval. Try to keep UI good looking.
*/



const clckFunc = () => {
    let date = new Date();
    let data = String(date).split(" ");
    let time = Array.from(data[4].split(":"));
    // time = time.map(Number);
    let day = date.getDay();
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
  
    let hour = document.getElementById("h");
    let min = document.getElementById("m");
    let sec = document.getElementById("s");
    let currDate = document.getElementById("d");
    let currDay = document.getElementById("d1");
  
    hour.innerHTML = time[0];
    min.innerHTML = time[1];
    sec.innerHTML = time[2];
    currDate.innerHTML = data[2] + " " + data[1] + " " + data[3];
    currDay.innerHTML = Day[day];
  }
  
  let timerId = setInterval(clckFunc, 1000);