/*jshint esversion: 6*/
const name = document.getElementById('person4Name');
const home = document.getElementById('person4HomeWorld');
const jedi = document.getElementById('person14Name');
const species = document.getElementById('person14Species');
const films = document.getElementById('filmList');
fetch('http://swapi.co/api/people/4/').then(function(res){
  return res.json();

})
.then(function(res) {
  name.innerHTML = res.name;
  return res;
})
.then(function(res) {
  return fetch(res.homeworld);
})
.then(function(res) {
  return res.json();
})
.then(function(res) {
  home.innerHTML = res.name;
  return res;
})
.then(function(res) {
  return fetch('http://swapi.co/api/people/14/');
})
.then(function(res) {
  return res.json();
})
.then(function(res) {
  jedi.innerHTML = res.name;
  return res;
})
.then(function(res) {
  return fetch(res.species);
})
.then(function(res) {
  return res.json();
})
.then(function(res) {
  species.innerHTML = res.name;
  return res;
})
.then(function(res) {
  return fetch('http://swapi.co/api/films/');
})
.then(function(res) {
  return res.json();
})
.then(function(res) {
  return res.results;
})
.then(function(res) {
  res.forEach(function(obj) {
    let li = document.createElement('li');
    li.className = 'film';
    document.getElementById('filmList').appendChild(li);

    let h2 = document.createElement('h2');
    let filmName = res.title;
    h2.className = "filmTitle";
    h2.innerHTML = filmName;

    let h3 = document.createElement('h3');
    h3.innerHTML = "Planets";
    li.appendChild(h3);

  });

  });



