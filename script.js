// Color palette generator script

const inputEle = document.getElementById('inputNo');
const resultDiv = document.querySelector('.resultDiv');

function genColor() {
  let numbers = inputEle.value;
  let htmlText = "";
  if (numbers > 6 ) {
    alert( `The input value should be less than 6`);
  }
  else if (numbers <= 0 ) {
    alert( `The input value should not be 0`);
  }
  else {
    for (let i = 1; i <= numbers; i++) {
      let randomColorValue = randomNumber();
      // console.log(`Random color value ${randomColorValue}`);
      htmlText += `<div class="colorDiv" style="background-color: ${randomColorValue};"><p class="colorText" onclick="copy(this)" title="click to copy">${randomColorValue}</p></div>`
    }
    console.log(htmlText);
    resultDiv.innerHTML = htmlText;
  }
}

function randomNumber() {
  let num = Math.floor(Math.random() * 900000) + 100000;
  return num;
}

// Copy to clip board function
function copy(input) {
  let colorText = '#' + input.innerHTML;
  navigator.clipboard.writeText(colorText);
}
