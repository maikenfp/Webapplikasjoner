const users = require("./util.js");

// TODO: Hent HTML #id med getElementById
const name = document.getElementById("name");
const age = document.getElementById("age");
const filter = document.getElementById("filter");

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += <li><span>Id</span><span>Navn</span><span>Alder</span></li>;
  for (const user of users) {
    userUl.innerHTML += <li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>;
  }
};
const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = name.value;
  // TODO: Sjekk om searchName ekisterer
  if (searchName) {
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = users.find((user) => user.name === searchName);
    // TODO: Sjekk som resultatet eksisterer
    if (searchResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
      createTableUI(searchResult);
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = "Inger brukere med dette navnet";
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};
const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = age.value;
  // TODO: Sjekk om filterVerdien ekisterer og er et tall
  if (typeof Number === filterValue) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter((user) => user.age > filterValue);
    // TODO: Sjekk om det er noe resultat og at legnden er større enn null
    if (filterResult && filterResult > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
      createTableUI(filterResult);
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = "Fant ingen med denne alderen";
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
window.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filter.addEventListener("click", handleFilter);