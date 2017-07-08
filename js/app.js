/*jshint esversion: 6 */
var oReq = new XMLHttpRequest();
function name4Person() {
  let obj = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerHTML = obj.name;
}
oReq.addEventListener('load', name4Person);
oReq.open("get", "http://swapi.co/api/people/4/");
oReq.send();

var oReq2 = new XMLHttpRequest();
function planet1() {
  let obj2 = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerHTML = obj2.name;
}
oReq2.addEventListener('load', planet1);
oReq2.open("get", "http://swapi.co/api/planets/1/");
oReq2.send();

var oReq3 = new XMLHttpRequest();
function name14Person() {
  let obj3 = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerHTML = obj3.name;
}
oReq3.addEventListener('load', name14Person);
oReq3.open("get", "http://swapi.co/api/people/14/");
oReq3.send();

var oReq4 = new XMLHttpRequest();
function planet22() {
  let obj4 = JSON.parse(this.responseText);
  document.getElementById('person14Species').innerHTML = obj4.name;
}
oReq4.addEventListener('load', planet22);
oReq4.open("get", "http://swapi.co/api/species/1");
oReq4.send();