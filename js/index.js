const showButton = document.getElementById("showButton");
const calculatorCard = document.getElementById("calculatorCard");
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

showButton.addEventListener("click", function () {
  calculatorCard.style.display = "block";
});

calculateButton.addEventListener("click", function () {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!isNaN(base) && !isNaN(height)) {
    const area = 0.5 * base * height;
    resultElement.textContent = `Luas Segitiga: ${area.toFixed(2)}`;
  } else {
    resultElement.textContent = "Masukkan panjang alas dan tinggi dengan benar.";
  }
});


const showBtn = document.getElementById("showBtn");
const calcCard = document.getElementById("calcCard");
const calcBtn = document.getElementById("calcBtn");
const resultElement2 = document.getElementById("result2");
  
showBtn.addEventListener("click", function () {
    calcCard.style.display = "block";
  });
  
calcBtn.addEventListener("click", function () {
    const side1 = parseFloat(document.getElementById("s1").value);
    const side2 = parseFloat(document.getElementById("s2").value);
    const side3 = parseFloat(document.getElementById("s3").value);
  
    if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
      const perimeter = side1 + side2 + side3;
      resultElement2.textContent = `Keliling Segitiga: ${perimeter.toFixed(2)}`;
    } else {
      resultElement2.textContent = "Masukkan panjang sisi-sisi dengan benar.";
    }
});
  
