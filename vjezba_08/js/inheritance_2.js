class Vozilo {
  marka;
  godinaProizvodnje;

  constructor(marka, godinaProizvodnje) {
    this.marka = marka;
    this.godinaProizvodnje = godinaProizvodnje;
  }

  vozi() {
    console.log(`Vozim ${this.marku} vozila godište ${this.godinaProizvodnje}`);
  }
}

class Automobil extends Vozilo {
  boja;
  brojVrata;

  constructor(marka, godinaProizvodnje, boja, brojVrata) {
    super(marka, godinaProizvodnje);
    this.boja = boja;
    this.brojVrata = brojVrata;
  }

  parkiraj() {
    console.log(`"Automobil ${this.marka}, ${this.boja} boje je parkiran!`);
  }
}

class Motocikl extends Vozilo {
  tip;

  constructor(marka, godinaProizvodnje, tip) {
    super(marka, godinaProizvodnje);
    this.tip = tip;
  }
  voziBrzo() {
    console.log(
      `Vozim motocikl tipa ${this.tip}, marke ${this.marka} i godište ${this.godinaProizvodnje} brzo!`,
    );
  }
}

// Kreiranje instance objekta Automobil
let auto = new Automobil("BMW", 2022, "crna", 5);
auto.vozi(); // Vozim marku vozila BMW godište 2022
auto.parkiraj(); // Automobil BMW, crna boje je parkiran!
// Kreiranje instance objekta Motocikl
let moto = new Motocikl("Honda", 2020, "sportski");
moto.vozi(); // Vozim marku vozila Honda godište 2020
moto.voziBrzo(); // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!
