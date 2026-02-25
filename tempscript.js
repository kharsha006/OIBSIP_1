const input=document.getElementById("tempInput");
const fromUnit=document.getElementById("fromUnit");
const toUnit=document.getElementById("toUnit");
const result=document.getElementById("result");
const history=document.getElementById("history");
const thermo=document.getElementById("thermoFill");
const sound=document.getElementById("sound");

/* LIVE CONVERSION */
input.addEventListener("input",convert);
fromUnit.addEventListener("change",convert);
toUnit.addEventListener("change",convert);

function convert(){

let temp=parseFloat(input.value);
if(isNaN(temp)){result.innerText="Enter value"; return;}

let c,f,k;

/* convert to celsius first */
if(fromUnit.value==="c") c=temp;
if(fromUnit.value==="f") c=(temp-32)*5/9;
if(fromUnit.value==="k") c=temp-273.15;

/* convert from celsius */
if(toUnit.value==="c") resultVal=c;
if(toUnit.value==="f") resultVal=(c*9/5)+32;
if(toUnit.value==="k") resultVal=c+273.15;

result.innerText=resultVal.toFixed(2)+" °"+toUnit.value.toUpperCase();

/* thermometer animation */
let percent=Math.min(Math.max((c+50)/150*100,0),100);
thermo.style.height=percent+"%";

/* history */
let li=document.createElement("li");
li.innerText=temp+"°"+fromUnit.value.toUpperCase()+" → "+resultVal.toFixed(2)+"°"+toUnit.value.toUpperCase();
history.prepend(li);

/* sound */
sound.play();
}

/* SWAP */
function swapUnits(){
let temp=fromUnit.value;
fromUnit.value=toUnit.value;
toUnit.value=temp;
convert();
}

/* DARK MODE */
function toggleTheme(){
document.body.classList.toggle("dark");
}