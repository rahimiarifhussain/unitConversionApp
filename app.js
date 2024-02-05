const inputValue = document.getElementById("enterNum");
const metertofeet = 3.28084;
const foottometer = 0.3048;
const littertoGallons = 0.264172;
const gallonstoLitter = 3.78541;
const killotoaPound = 2.20462;
const poundtoKillo = 0.453592;
const btn = document.getElementById("btn");
const Ometer = document.getElementById("meter");
const ogallon = document.getElementById("gallon");
const Omass = document.getElementById("mass");
console.log(Ometer, ogallon, Omass);
btn.addEventListener("click", function () {
  // Ometer.innerHTML = ``;
  Ometer.innerText = `${inputValue.value} meters =${
    inputValue.value * metertofeet.toFixed(4)
  } feet | ${inputValue.value} feet = ${
    inputValue.value * foottometer.toFixed(4)
  } meters`;
  // Volume Gass
  ogallon.innerText = `${inputValue.value} liters =${
    inputValue.value * littertoGallons.toFixed(4)
  } gallons | ${inputValue.value} gallons = ${
    inputValue.value * gallonstoLitter.toFixed(4)
  } liters`;
  // Mass kilograms to Pounds
  Omass.innerText = `${inputValue.value} kilos =${
    inputValue.value * killotoaPound.toFixed(4)
  } pounds | ${inputValue.value} pounds = ${
    inputValue.value * poundtoKillo.toFixed(4)
  } kilos`;
});
