const playBtn = document.getElementById("gamePlay");
const diceResult = document.getElementById("dice-value");

playBtn.addEventListener("click", () => {
  //   alert("Hello World");
  let min = 1;
  let max = 7;
  let result = Math.floor(Math.random() * (max - min)) + 1;
  diceResult.innerHTML = result;
  //   console.log(result);
});
