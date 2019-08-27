// poweron button
document.querySelector("button#on").addEventListener("click", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.removeAttribute("disabled");
  });
  console.log("Cal on");
});

document.querySelector("button#off").addEventListener("click", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.setAttribute("disabled", "disabled");
  });
  console.log("Calc off");
  document.querySelector("button#on").removeAttribute("disabled");
});

document.querySelector(".number").addEventListener("click", () => {
  button = document.querySelector("button").value;
  document.querySelector("#input").textContent = button;
});
// function (elem, index) { if (elem[key] === value) {
//   ret.push(that[index]); } }); return ret.length < 2 ? ret[0] : ret; }; var bar =
//   myArray.grep("id","45"); const populateCurrencies = () => { var opt =
//   document.querySelector('select'); return currencies.forEach(){ var option =
//   document.createElement("option"); option.textContent = currencies.name;
//   option.value =currencies.id; opt.appendChild(option);
