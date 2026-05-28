// app.js

// 1 Dohvatite element s ID-om "prednosti" i promijenite mu pozadinu u žutu boju.
const advantages = document.getElementById("prednosti");
advantages.style.backgroundColor = "yellow";

// 2 Dohvatite sve elemente s klasom "odjeljak" i promijenite im veličinu fonta na
// 16 piksela
const classSections = document.getElementsByClassName("odjeljak");
for (const section of classSections) {
  section.style.fontSize = "16px";
}

// 3 Dohvatite element s ID-om "prednosti" i promijenite mu tekst u "Ova sekcija
// je promijenjena korištenjem DOM-a".
advantages.textContent = "Ova sekcija je promijenjena korištenjem DOM-a";

// 4 Dohvatite sve elemente s oznakom "section" u dokumentu i promijenite im
// pozadinu u plavu boju.
const allSections = document.getElementsByTagName("section");
for (const section of allSections) {
  section.style.backgroundColor = "blue";
}

// 5 Kreirajte gumb koji će mijenjati boju pozadine stranice kada se klikne na njega.
const backgroundButton = document.createElement("button");
backgroundButton.textContent = "Promijeni boju pozadine";
backgroundButton.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightgreen" ? "white" : "lightgreen";
});
document.body.appendChild(backgroundButton);

// 6 Kreirajte gumb i prazan paragraf. Klikom na gumb, prikažite proizvoljan tekst
// u paragrafu.
const showButton = document.createElement("button");
showButton.textContent = "Prikaži tekst";
const emptyParagraph = document.createElement("p");
emptyParagraph.id = "proizvoljni-tekst";
document.body.appendChild(showButton);
document.body.appendChild(emptyParagraph);

showButton.addEventListener("click", () => {
  emptyParagraph.textContent = "Ovo je proizvoljan tekst.";
});

// 7 Preuzmite dvije fotografije s interneta. Na stranicu postavite jednu
// fotografiju i gumb "Promijeni sliku". Kada se klikne na gumb, funkcijom onclick
// promijenite src atribut fotografije tako da se prikaže druga fotografija.
const image = document.createElement("img");
image.src = "./1.png";
image.alt = "Fotografija";
image.width = 200;
document.body.appendChild(image);

const imageButton = document.createElement("button");
imageButton.textContent = "Promijeni sliku";

let isFirstShown = true;
imageButton.addEventListener("click", () => {
  if (isFirstShown) {
    image.src = "./2.png";
    isFirstShown = false;
  } else {
    image.src = "./1.png";
    isFirstShown = true;
  }
});
document.body.appendChild(imageButton);

// 8 Funkcija koja dodaje novi paragraf u div#paragrafi (postojeći gumb u HTML-u)
function dodajParagraf() {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Ovo je novi paragraf";
  document.getElementById("paragrafi").appendChild(newParagraph);
}