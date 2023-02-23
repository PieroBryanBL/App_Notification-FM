let btnRead = document.getElementById("btnRead");
let firstCard = document.getElementById("firstCard");
let secondCard = document.getElementById("secondCard");
let thirdCard = document.getElementById("thirdCard");
let countNotis = document.getElementById("countNotis");
let redPoints = document.getElementsByClassName("redPoints");

btnRead.addEventListener("click", () => {
  firstCard.style.background = "#fff";
  secondCard.style.background = "#fff";
  thirdCard.style.background = "#fff";
  countNotis.innerHTML = "0";

  for (let i = 0; i < redPoints.length; i++) {
    redPoints[i].style.display = "none";
  }

  btnRead.innerHTML = "Restart";

  btnRead.addEventListener("click", () => {
    if ((btnRead.innerHTML = "Restart")) {
      location.reload();
    }
  });
});
