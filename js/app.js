/*jshint esversion: 6 */
var oReq = new XMLHttpRequest();
function reqListener() {
  console.log(this.responseText);
}
oReq.addEventListener('load', reqListener);
oReq.open("get", "http://swapi.co/api/people/4/");
oReq.send();
console.log(this.name);

let person4 = document.getElementById(person4Name);

console.log(person4);