/*jshint esversion: 6 */
let person4 = new XMLHttpRequest();
function name4Person() {
  let obj = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerHTML = obj.name;

  let planet1 = new XMLHttpRequest();
  planet1.open('GET', obj.homeworld);
  planet1.addEventListener('load',function() {
    let homeWorld = JSON.parse(this.responseText);
    document.getElementById('person4HomeWorld').innerHTML = homeWorld.name;
  });
  planet1.send();
}
person4.addEventListener('load', name4Person);
person4.open("GET", "http://swapi.co/api/people/4/");
person4.send();


var person14Name = new XMLHttpRequest();
function name14Person() {
  let obj = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerHTML = obj.name;

  var species = new XMLHttpRequest();
  species.open("GET", obj.species);
  species.addEventListener('load', function() {
    let race = JSON.parse(this.responseText);
    document.getElementById('person14Species').innerHTML = race.name;
  });
  species.send();
}
person14Name.addEventListener('load', name14Person);
person14Name.open("GET", "http://swapi.co/api/people/14/");
person14Name.send();


var film = new XMLHttpRequest();
function films() {
  var obj = JSON.parse(this.responseText);
  let filmTitle = obj.results;
  filmTitle.map((name, nameIndex)=>{
    let li = document.createElement('li');
    li.className = "film";
    document.getElementById('filmList').appendChild(li);

    let head2 = document.createElement("h2");
    let filmName = name.title;
    head2.className = "filmTitle";
    head2.innerHTML = filmName;
    li.appendChild(head2);

    let titlePlanet = filmTitle;
    let head3 = document.createElement('h3');
    head3.innerHTML = "Planets";
    li.appendChild(head3);

    let ul = document.createElement('ul');
    ul.className = 'filmPlanets';
    li.appendChild(ul);

    name.planets.map((planet, planetIndex) => {
      var home = new XMLHttpRequest();
      let liPlanet = document.createElement('li');
      liPlanet.className = 'planet';
      ul.appendChild(liPlanet);
      home.open('GET', planet);

      home.addEventListener('load', function(){
        let yayPlanet = JSON.parse(this.responseText);
        let head4 = document.createElement('h4');
        head4.className = 'planetName';
        head4.innerHTML = yayPlanet.name;
        liPlanet.appendChild(head4);

        console.log(li);
      });
      home.send();
    });
  });
}
film.addEventListener('load', films);
film.open('GET', 'http://swapi.co/api/films/');
film.send();