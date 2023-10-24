const divA = document.getElementById("image-hide-a");
const divB = document.getElementById("image-hide-b");
const divC = document.getElementById("image-hide-c");

const btnA = document.getElementById("button-a");
const btnB = document.getElementById("button-b");
const btnC = document.getElementById("button-c");

const hideA = document.getElementById("hide-a");
const hideB = document.getElementById("hide-b");
const hideC = document.getElementById("hide-c");

// Show div's that include image + hide result button
btnA.addEventListener("click", (e) => {
  divA.style.display = "flex";
});

btnB.addEventListener("click", (e) => {
  divB.style.display = "flex";
});

btnC.addEventListener("click", (e) => {
  divC.style.display = "flex";
});

//Hide div's
hideA.addEventListener("click", (e) => {
  divA.style.display = "none";
});

hideB.addEventListener("click", (e) => {
  divB.style.display = "none";
});

hideC.addEventListener("click", (e) => {
  divC.style.display = "none";
});
