
let elInput = document.querySelector("#input");
let elBtn = document.querySelector(".btn");
let elOutput = document.querySelector(".output");
let elList = [];

elBtn.addEventListener("click", function(e) {
  e.preventDefault()
  
  inputValue = elInput.value.trim();
  if (inputValue == "" || inputValue.length < 3 || inputValue.length > 30 || !isNaN(inputValue)) {
    elInput.setAttribute("style", "border-color: red !important ");
    return
  } else{
    elInput.setAttribute("style", "border-color: black")
  }

  elList.push(inputValue);
  console.log(elList);

  let newLi = document.createElement("li");

  newLi.setAttribute("style", "list-style: decimal; color: black; margin-top: 15px; font-size: 22px; font-weight: 600;")

  newLi.textContent = `Maxsulot nomi: ${inputValue};`;

  elOutput.appendChild(newLi);
})

