const numbersForCovid = document.getElementById("data");
const updateBtn = document.getElementById("updateBtn");
const totalDeath = document.getElementById("total-death");
const totalRecovered = document.getElementById("total-recovered");
const totalCases = document.getElementById("total-cases");
const todaysCases = document.getElementById("todays-cases");
const countryList = document.getElementById("country-list");

let countryName = [];
let totalDeaths = 0;
let totalConfirmedCases = 0;
let todaysConfimedCases = 0;

async function fetchCovidData() {
  const res = await fetch("https://api.covid19api.com/summary");

  const data = await res.json().then((results) => {
    const covidStats = {
      tCases: results.Global["TotalConfirmed"],
      tDeath: results.Global["TotalDeaths"],
      todaysCases: results.Global["NewConfirmed"],
      countries: results.Countries,
    };
    if (!covidStats) return;
    totalDeaths = covidStats.tDeath;
    totalConfirmedCases = covidStats.tCases;
    todaysConfimedCases = covidStats.todaysCases;

    for (let i = 0; i <= covidStats.countries.length - 1; i++) {
      countryName.push(results.Countries[i]);
    }
    displayData(covidStats);
    updateSelectCountries(covidStats.countries);
  });
}
function getCountry(sel) {
  let countryNameOption = sel.options[sel.selectedIndex].text;
  if (countryNameOption === sel.options[0].text) {
    totalDeath.innerText = commaNumber(totalDeaths);
    todaysCases.innerText = commaNumber(todaysConfimedCases);
    return (totalCases.innerText = commaNumber(totalConfirmedCases));
  }
  const selectedCountry = countryName.find(
    (country) => country.Country === countryNameOption
  );
  totalCases.innerText = commaNumber(selectedCountry.TotalConfirmed);
  totalDeath.innerText = commaNumber(selectedCountry.TotalDeaths);
  todaysCases.innerText = commaNumber(selectedCountry.NewConfirmed);
}

function displayData(covid) {
  totalCases.innerText = commaNumber(covid.tCases);
  totalDeath.innerText = commaNumber(covid.tDeath);
  todaysCases.innerText = commaNumber(covid.todaysCases);
}

function commaNumber(x) {
  if (x === 0) return "00000";
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateSelectCountries(countries) {
  console.log("countries", countries);
  for (let i = 0; i <= countries.length - 1; i++) {
    let selectOption = document.createElement("option");
    selectOption.innerText = countries[i].Country;
    selectOption.value = i;
    selectOption.classList.add("country");
    countryList.appendChild(selectOption);
  }
}

const allCountries = document.querySelector(".country-list");

fetchCovidData();
