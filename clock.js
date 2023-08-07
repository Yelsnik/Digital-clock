"use script";

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sn = document.querySelector("#sn");
const ampm = document.querySelector("#ampm");

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
  //console.log(h, m, s);

  hr.textContent = h;
  mn.textContent = m;
  sn.textContent = s;
  ampm.textContent = amorPm;
};

setInterval(tick, 1000);
