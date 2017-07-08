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
