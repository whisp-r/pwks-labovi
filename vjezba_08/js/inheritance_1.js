// Napišite konstruktor funkciju za stvaranje objekata koji predstavlja automobil, a
// zatim koristeći prototipove dodajte metode za dodavanje brzine i prikaz trenutne
// brzine automobila.
// Konstruktor funkcija prima četiri argumenta: marku, model, godinu proizvodnje i
// trenutnu brzinu automobila.
// Svi ovi argumenti se spremaju kao svojstva objekta koji će biti stvoren pomoću
// konstruktor funkcije.
// let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60);
// mojAutomobil.dodajBrzinu(20);
// mojAutomobil.prikaziBrzinu();

class Automobil {
  name;
  model;
  year;
  cur_speed;

  constructor(name, model, year, cur_speed) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.cur_speed = cur_speed;
  }
}

const automobilPrototype = {
  dodajBrzinu(speed) {
    this.cur_speed += speed;
  },
  prikaziBrzinu() {
    console.log(`${this.cur_speed}`);
  },
};

Object.assign(Automobil.prototype, automobilPrototype);

let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60);
mojAutomobil.dodajBrzinu(20);
mojAutomobil.prikaziBrzinu();


