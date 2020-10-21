// set initial
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList[1];

    if (styles === "decrease") {
      count--;
    } else if (styles === "reset") {
      count = 0;
    } else if (styles === "increase") {
      count++;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count == 0) {
      value.style.color = "black";
    } else if (count < 0) {
      value.style.color = "red";
    }

    value.textContent = count;
  });
});
