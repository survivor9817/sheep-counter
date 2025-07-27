let saveEl = document.getElementById("save-el");
let finalEl = document.getElementById("final-el");
let countEl = document.getElementById("count-el");
let count = 0;

function countSheep(num) {
  if (count === 0 && num < 0) return;
  count += num;
  countEl.textContent = count;
}

let eachEntry = [];
function save(direction) {
  if (count === 0) return;

  if (direction === "vorood") {
    eachEntry.push("+" + count);
  } else {
    eachEntry.push("-" + count);
  }
  let countStr = eachEntry.join(" , ");
  eachEntry = eachEntry.map((str) => parseInt(str, 10));
  saveEl.textContent = "";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

let sum = null;
function updateFinal() {
  sum = eachEntry.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  finalEl.textContent = "";
  finalEl.textContent += sum;
}
