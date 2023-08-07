"use script";
/*
const now = new Date("june 6, 2021");

//console.log(dateFns.isToday(now));

//Formatting options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, `MM`));
console.log(dateFns.format(now, "dddd Do MMMM, YYYY"));

// comparing dates
const before = new Date("February 1 2019 12:00:00");

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
*/

/*
////// Clock code
const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  let h = `${now.getHours()}`.padStart(2, 0);
  const m = `${now.getMinutes()}`.padStart(2, 0);
  const s = `${now.getSeconds()}`.padStart(2, 0);
  let amorPm = "AM";
  if (h >= 12) {
    amorPm = "PM";
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h < 1) {
    h = h + 12;
  }


  const html = `
   <span>${h}</span>  :
   <span>${m}</span>  :
   <span>${s}</span> 
   <span>${amorPm}</span> 
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
*/
