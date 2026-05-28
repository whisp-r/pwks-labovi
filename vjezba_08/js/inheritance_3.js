class Zaposlenik {
  ime;
  prezime;
  email;
  ocjenaSposobnosti;

  constructor(ime, prezime, email, ocjenaSposobnosti) {
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.ocjenaSposobnosti = ocjenaSposobnosti;
  }
  ispisi() {
    console.log(`${this.ime} ${this.prezime} ${this.email}`);
  }
  ocjena() {}
}

class Programer extends Zaposlenik {
  programskiJezik;

  constructor(ime, prezime, email, ocjenaSposobnosti, programskiJezik) {
    super(ime, prezime, email, ocjenaSposobnosti);
    this.programskiJezik = programskiJezik;
  }
  ispisi() {
    console.log(
      `${this.ime} ${this.prezime} ${this.email} ${this.programskiJezik}`,
    );
  }
}

class Dizajner extends Zaposlenik {
  software;

  constructor(ime, prezime, email, ocjenaSposobnosti, software) {
    super(ime, prezime, email, ocjenaSposobnosti);
    this.software = software;
  }

  ispisi() {
    console.log(`${this.ime} ${this.prezime} ${this.email} ${this.software}`);
  }
}

// Kreiranje instance za klasu "Zaposlenik"
const zaposlenik1 = new Zaposlenik(
  "Pero",
  "Perić",
  "pero.peric@example.com",
  4,
);
zaposlenik1.ispisi(); // Ispisuje "Pero Perić, email: pero.peric@example.com"

// Kreiranje instance za klasu "Programer"
const programer1 = new Programer(
  "Marko",
  "Markić",
  "marko.markic@example.com",
  4,
  "JavaScript",
);
programer1.ispisi();

const dizajner1 = new Dizajner(
  "Ana",
  "Anić",
  "ana.anic@example.com",
  4,
  "Adobe Photoshop",
);
dizajner1.ispisi();
