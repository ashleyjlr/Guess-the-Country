// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
const inputField22 = document.querySelector("#guess22");
const inputField33 = document.querySelector("#guess33");

const reveal = document.querySelector("#reveal22");
const reveal22 = document.querySelector("#reveal");
const reveal33 = document.querySelector("#reveal33");
const reveal44 = document.querySelector("#reveal44");

let number = 0;
// try change instead of input
// "input" is for each keystroke
// "change" requires hitting enter.
inputField.addEventListener("change", () => {
  console.log("Guess submitted!");
  let guess = inputField.value;
  
  if (guess == "Seychelles" || guess == "seychelles") {
    alert("You guessed...Seychelles! Correct!!!");
    reveal22.removeAttribute('style');
    number++;
    console.log(number)
    if (number == 3){
  reveal44.removeAttribute('style');
}
  } 
  else {
    alert("TRY AGAIN");
  }
  inputField.value = "";

});

inputField22.addEventListener("change", () => {
  console.log("Guess submitted!");
  let guess22 = inputField22.value;
  if (guess22 == "Japan" || guess22 == "japan") {
    alert("You guessed...Japan! Correct!!!");
    reveal.removeAttribute('style');
    number++;
    console.log(number)
    if (number == 3){
      reveal44.removeAttribute('style');
}
  } 
  else {
    alert("TRY AGAIN");
  }
  inputField22.value = "";

});


inputField33.addEventListener("change", () => {
  console.log("Guess submitted!");
  let guess33 = inputField33.value;
  if (guess33 == "New Zealand" || guess33 == "new zealand") {
    alert("You guessed...New Zealand! Correct!!!");
    // result.classList.remove("hidden");
    // reveal.style.display = "block";
    reveal33.removeAttribute('style');
    number++;
    console.log(number)
    if (number == 3){
      reveal44.removeAttribute('style');
}
  }

    // el.style.removeProperty('zoom');
  else {
    alert("TRY AGAIN");
  }
  inputField33.value = "";

});

console.log(number)
if (number == 3){
  reveal44.removeAttribute('style');
}

function GetValue()
{
    var myarray= new Array("Japan","Seychelles","New Zealand","Canada","Brazil", "Germany", "Bangladesh", "France", "Greece", "Korea", "China", "Turkey", "Philippines", "Italy", "Norway", "Mexico", "India", "Singapore", "Uruguay", "Nigeria", "Sweden", "Nepal", "Ireland", "Austria", "Honduras", "Guatemala", "Ecuador", "Kenya", "Morocco");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("message").innerHTML=random;
}