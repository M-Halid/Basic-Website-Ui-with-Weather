fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Leipzig&units=Metric&appid=b00c652c4b84965eb16165112217a4a6"
  )
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data.main.temp);

    var temp = document.querySelector(".temp");
    temp.innerHTML = "Zurzeit ist das Wetter " + Math.round(data.main.temp) + "°" + " Grad";

    // "http://openweathermap.org/img/w/04n.png");
  });

function kalip(name, age, loc) {
  this.name = name;
  this.age = age;
  this.loc = loc;
}

kalip.prototype.year = function () {
  return 2020 - this.age;
};

let ali = new kalip("ali", 26, "ist");

console.log(ali.year());

class yenikalip {
  constructor(name, age, loc) {
    this.name = name;
    this.age = age;
    this.loc = loc;
  }
}

yenikalip.prototype.buyut = () => this.name.toUpperCase();

let nho = new yenikalip("niho", 26, "ylv");
console.log(nho.buyut());

let inp1 = document.querySelector("#mid:nth-child(2)>:nth-child(1)");
inp1.setAttribute("placeholder", "Fullname:");
let inp2 = document.querySelector("#mid:nth-child(2)>:nth-child(2)");
inp2.setAttribute("placeholder", "Age:");
let inp3 = document.querySelector("#mid:nth-child(2)>:nth-child(3)");
inp3.setAttribute("placeholder", "Location:");

ref = () => window.location.reload();

class Record {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}

send = () => {
  let person = new Record(inp1.value, inp2.value, inp3.value);
  console.log(person);

  let card = document.createElement("div");
  document.body.appendChild(card);
  card.className = "card";
  card.innerText =
    inp1.value +
    "\n" +
    inp2.value +
    " years old" +
    "\n" +
    "Lives in " +
    inp3.value;

  // let cont = document.getElementById("container")
  // cont.appendChild(card)

  // let name = document.querySelector(".card").innerText = document.querySelector(".card-title").innerText + inp1.value
  // let age = document.querySelector(".card-subtitle").innerText = document.querySelector(".card-subtitle").innerText + inp2.value + " Years old"
  // let location = document.querySelector(".card-text").innerText = document.querySelector(".card-text").innerText + "Lives in " + inp3.value
  inp1.value = "";
  inp2.value = "";
  inp3.value = "";
};
document.querySelector("#mid>button").addEventListener("click", send);



var ifee = (function () {
  let name = "halid";
  console.log(name)
})();