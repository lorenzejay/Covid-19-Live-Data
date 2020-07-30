const numbersForCovid = document.getElementById("data");
const updateBtn = document.getElementById("updateBtn");
const totalDeath = document.getElementById("total-death");
const totalRecovered = document.getElementById("total-recovered");
const totalCases = document.getElementById("total-cases");
const countryList = document.getElementById("country-list");

let countryName = [];

async function fetchCovidData() {
  const res = await fetch("https://api.covid19api.com/summary");

  const data = await res.json().then((results) => {
    const covid = {
      tCases: results.Global["TotalConfirmed"],
      tDeath: results.Global["TotalDeaths"],
      tRecovered: results.Global["TotalRecovered"],
      countries: results.Countries,
    };
    for (let i = 0; i <= 189; i++) {
      countryName.push(results.Countries[i]);
    }
    updateSelectCountries(countryName);

    displayData(covid);

    // updateDataForCountry(results);
  });
}
console.log(countryName);
function getCountry(sel) {
  let countryNameOption = sel.options[sel.selectedIndex].text;
  console.log(countryNameOption);
  switch (countryNameOption) {
    case "Afghanistan":
      totalCases.innerText = commaNumber(countryName[0].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[0].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[0].TotalRecovered);
      break;
    case "Albania":
      totalCases.innerText = commaNumber(countryName[1].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[1].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[1].TotalRecovered);
      break;
    case "Algeria":
      totalCases.innerText = commaNumber(countryName[2].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[2].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[2].TotalRecovered);
      break;
    case "Andorra":
      totalCases.innerText = commaNumber(countryName[3].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[3].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[3].TotalRecovered);
      break;
    case "Angola":
      totalCases.innerText = commaNumber(countryName[4].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[4].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[4].TotalRecovered);
      break;
    case "Antigua and Barbuda":
      totalCases.innerText = commaNumber(countryName[5].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[5].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[5].TotalRecovered);
      break;
    case "Argentina":
      totalCases.innerText = commaNumber(countryName[6].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[6].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[6].TotalRecovered);
      break;
    case "Armenia":
      totalCases.innerText = commaNumber(countryName[7].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[7].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[7].TotalRecovered);
      break;
    case "Australia":
      totalCases.innerText = commaNumber(countryName[8].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[8].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[8].TotalRecovered);
      break;
    case "Austria":
      totalCases.innerText = commaNumber(countryName[9].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[9].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[9].TotalRecovered);
      break;
    case "Azerbaijan":
      totalCases.innerText = commaNumber(countryName[10].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[10].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[10].TotalRecovered);
      break;
    case "Bahamas":
      totalCases.innerText = commaNumber(countryName[11].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[11].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[11].TotalRecovered);
      break;
    case "Bahrain":
      totalCases.innerText = commaNumber(countryName[12].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[12].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[12].TotalRecovered);
      break;
    case "Bangladesh":
      totalCases.innerText = commaNumber(countryName[13].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[13].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[13].TotalRecovered);
      break;
    case "Barbados":
      totalCases.innerText = commaNumber(countryName[14].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[14].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[14].TotalRecovered);
      break;
    case "Belarus":
      totalCases.innerText = commaNumber(countryName[15].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[15].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[15].TotalRecovered);
      break;
    case "Belgium":
      totalCases.innerText = commaNumber(countryName[16].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[16].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[16].TotalRecovered);
      break;
    case "Belize":
      totalCases.innerText = commaNumber(countryName[17].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[17].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[17].TotalRecovered);
      break;
    case "Benin":
      totalCases.innerText = commaNumber(countryName[18].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[18].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[18].TotalRecovered);
      break;
    case "Bhutan":
      totalCases.innerText = commaNumber(countryName[19].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[19].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[19].TotalRecovered);
      break;
    case "Bolivia":
      totalCases.innerText = commaNumber(countryName[20].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[20].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[20].TotalRecovered);
      break;
    case "Bosnia and Herzegovina":
      totalCases.innerText = commaNumber(countryName[21].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[21].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[21].TotalRecovered);
      break;
    case "Botswana":
      totalCases.innerText = commaNumber(countryName[22].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[22].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[22].TotalRecovered);
      break;
    case "Brazil":
      totalCases.innerText = commaNumber(countryName[23].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[23].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[23].TotalRecovered);
      break;
    case "Brunei Darussalam":
      totalCases.innerText = commaNumber(countryName[24].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[24].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[24].TotalRecovered);
      break;
    case "Bulgaria":
      totalCases.innerText = commaNumber(countryName[25].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[25].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[25].TotalRecovered);
      break;
    case "Burkina Faso":
      totalCases.innerText = commaNumber(countryName[26].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[26].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[26].TotalRecovered);
      break;
    case "Burundi":
      totalCases.innerText = commaNumber(countryName[27].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[27].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[27].TotalRecovered);
      break;
    case "Cambodia":
      totalCases.innerText = commaNumber(countryName[28].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[28].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[28].TotalRecovered);
      break;
    case "Cameroon":
      totalCases.innerText = commaNumber(countryName[29].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[29].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[29].TotalRecovered);
      break;
    case "Canada":
      totalCases.innerText = commaNumber(countryName[30].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[30].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[30].TotalRecovered);
      break;
    case "Carpe Verde":
      totalCases.innerText = commaNumber(countryName[31].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[31].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[31].TotalRecovered);
      break;
    case "Central African Republic":
      totalCases.innerText = commaNumber(countryName[32].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[32].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[32].TotalRecovered);
      break;
    case "Chad":
      totalCases.innerText = commaNumber(countryName[33].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[33].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[33].TotalRecovered);
      break;
    case "Chile":
      totalCases.innerText = commaNumber(countryName[34].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[34].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[34].TotalRecovered);
      break;
    case "China":
      totalCases.innerText = commaNumber(countryName[35].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[35].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[35].TotalRecovered);
      break;
    case "Colombia":
      totalCases.innerText = commaNumber(countryName[36].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[36].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[36].TotalRecovered);
      break;
    case "Comoros":
      totalCases.innerText = commaNumber(countryName[37].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[37].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[37].TotalRecovered);
      break;
    case "Congo (Brazzaville)":
      totalCases.innerText = commaNumber(countryName[38].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[38].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[38].TotalRecovered);
      break;
    case "Congo (Kinshasa)":
      totalCases.innerText = commaNumber(countryName[39].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[39].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[39].TotalRecovered);
      break;
    case "Costa Rica":
      totalCases.innerText = commaNumber(countryName[40].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[40].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[40].TotalRecovered);
      break;
    case "Croatia":
      totalCases.innerText = commaNumber(countryName[41].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[41].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[41].TotalRecovered);
      break;
    case "Cuba":
      totalCases.innerText = commaNumber(countryName[42].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[42].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[42].TotalRecovered);
      break;
    case "Cyprus":
      totalCases.innerText = commaNumber(countryName[43].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[43].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[43].TotalRecovered);
      break;
    case "Czech Republic":
      totalCases.innerText = commaNumber(countryName[44].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[44].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[44].TotalRecovered);
      break;
    case `Côte d' Ivoire`:
      totalCases.innerText = commaNumber(countryName[45].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[45].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[45].TotalRecovered);
      break;
    case "Denmark":
      totalCases.innerText = commaNumber(countryName[46].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[46].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[46].TotalRecovered);
      break;
    case "Djibouti":
      totalCases.innerText = commaNumber(countryName[47].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[47].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[47].TotalRecovered);
      break;
    case "Dominica":
      totalCases.innerText = commaNumber(countryName[48].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[48].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[48].TotalRecovered);
      break;
    case "Dominican Republic":
      totalCases.innerText = commaNumber(countryName[49].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[49].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[49].TotalRecovered);
      break;
    case "Ecuador":
      totalCases.innerText = commaNumber(countryName[50].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[50].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[50].TotalRecovered);
      break;
    case "Egypt":
      totalCases.innerText = commaNumber(countryName[51].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[51].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[51].TotalRecovered);
      break;
    case "El Salvador":
      totalCases.innerText = commaNumber(countryName[52].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[52].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[52].TotalRecovered);
      break;
    case "Equatorial Guniea":
      totalCases.innerText = commaNumber(countryName[533].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[53].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[53].TotalRecovered);
      break;
    case "Eritrea":
      totalCases.innerText = commaNumber(countryName[54].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[54].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[54].TotalRecovered);
      break;
    case "Estonia":
      totalCases.innerText = commaNumber(countryName[55].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[55].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[55].TotalRecovered);
      break;
    case "Ethiopia":
      totalCases.innerText = commaNumber(countryName[56].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[56].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[56].TotalRecovered);
      break;
    case "Fiji":
      totalCases.innerText = commaNumber(countryName[57].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[57].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[57].TotalRecovered);
      break;
    case "Finland":
      totalCases.innerText = commaNumber(countryName[58].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[58].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[58].TotalRecovered);
      break;
    case "France":
      totalCases.innerText = commaNumber(countryName[59].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[59].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[59].TotalRecovered);
      break;
    case "Gabon":
      totalCases.innerText = commaNumber(countryName[60].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[60].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[60].TotalRecovered);
      break;
    case "Gambia":
      totalCases.innerText = commaNumber(countryName[61].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[61].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[61].TotalRecovered);
      break;
    case "Georgia":
      totalCases.innerText = commaNumber(countryName[62].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[62].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[62].TotalRecovered);
      break;
    case "Germany":
      totalCases.innerText = commaNumber(countryName[63].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[63].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[63].TotalRecovered);
      break;
    case "Ghana":
      totalCases.innerText = commaNumber(countryName[64].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[64].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[64].TotalRecovered);
      break;
    case "Greece":
      totalCases.innerText = commaNumber(countryName[65].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[65].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[65].TotalRecovered);
      break;
    case "Grenada":
      totalCases.innerText = commaNumber(countryName[66].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[66].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[66].TotalRecovered);
      break;
    case "Guatemala":
      totalCases.innerText = commaNumber(countryName[67].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[67].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[67].TotalRecovered);
      break;
    case "Guinea":
      totalCases.innerText = commaNumber(countryName[68].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[68].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[68].TotalRecovered);
      break;
    case "Guinea-Bissau":
      totalCases.innerText = commaNumber(countryName[69].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[69].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[69].TotalRecovered);
      break;
    case "Guyana":
      totalCases.innerText = commaNumber(countryName[70].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[70].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[70].TotalRecovered);
      break;
    case "Haiti":
      totalCases.innerText = commaNumber(countryName[71].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[71].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[71].TotalRecovered);
      break;
    case "Holy See (vatican City State)":
      totalCases.innerText = commaNumber(countryName[72].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[72].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[72].TotalRecovered);
      break;
    case "Honduras":
      totalCases.innerText = commaNumber(countryName[73].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[73].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[73].TotalRecovered);
      break;
    case "Hungary":
      totalCases.innerText = commaNumber(countryName[74].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[74].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[74].TotalRecovered);
      break;
    case "Iceland":
      totalCases.innerText = commaNumber(countryName[75].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[75].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[75].TotalRecovered);
      break;
    case "India":
      totalCases.innerText = commaNumber(countryName[76].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[76].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[76].TotalRecovered);
      break;
    case "Indonesia":
      totalCases.innerText = commaNumber(countryName[77].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[77].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[77].TotalRecovered);
      break;
    case "Iran, Islamic Republic of":
      totalCases.innerText = commaNumber(countryName[78].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[78].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[78].TotalRecovered);
      break;
    case "Iraq":
      totalCases.innerText = commaNumber(countryName[79].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[79].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[79].TotalRecovered);
      break;
    case "Ireland":
      totalCases.innerText = commaNumber(countryName[80].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[80].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[80].TotalRecovered);
      break;
    case "Israel":
      totalCases.innerText = commaNumber(countryName[81].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[81].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[81].TotalRecovered);
      break;
    case "Italy":
      totalCases.innerText = commaNumber(countryName[82].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[82].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[82].TotalRecovered);
      break;
    case "Jamaica":
      totalCases.innerText = commaNumber(countryName[83].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[83].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[83].TotalRecovered);
      break;
    case "Japan":
      totalCases.innerText = commaNumber(countryName[84].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[84].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[84].TotalRecovered);
      break;
    case "Jordan":
      totalCases.innerText = commaNumber(countryName[85].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[85].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[85].TotalRecovered);
      break;
    case "Kazakhstan":
      totalCases.innerText = commaNumber(countryName[86].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[86].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[86].TotalRecovered);
      break;
    case "Kenya":
      totalCases.innerText = commaNumber(countryName[87].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[87].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[87].TotalRecovered);
      break;
    case "Korea (South)":
      totalCases.innerText = commaNumber(countryName[88].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[88].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[88].TotalRecovered);
      break;
    case "Kuwait":
      totalCases.innerText = commaNumber(countryName[89].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[89].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[89].TotalRecovered);
      break;
    case "Kyrgyzstan":
      totalCases.innerText = commaNumber(countryName[90].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[90].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[90].TotalRecovered);
      break;
    case "Lao PDR":
      totalCases.innerText = commaNumber(countryName[91].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[91].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[91].TotalRecovered);
      break;
    case "Latvia":
      totalCases.innerText = commaNumber(countryName[92].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[92].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[92].TotalRecovered);
      break;
    case "Lebanon":
      totalCases.innerText = commaNumber(countryName[93].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[93].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[93].TotalRecovered);
      break;
    case "Lesotho":
      totalCases.innerText = commaNumber(countryName[94].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[94].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[94].TotalRecovered);
      break;
    case "Liberia":
      totalCases.innerText = commaNumber(countryName[95].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[95].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[95].TotalRecovered);
      break;
    case "Libya":
      totalCases.innerText = commaNumber(countryName[96].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[96].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[96].TotalRecovered);
      break;
    case "Liechtenstein":
      totalCases.innerText = commaNumber(countryName[97].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[97].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[97].TotalRecovered);
      break;
    case "Lithuania":
      totalCases.innerText = commaNumber(countryName[98].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[98].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[98].TotalRecovered);
      break;
    case "Luxembourg":
      totalCases.innerText = commaNumber(countryName[99].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[99].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[99].TotalRecovered);
      break;
    case "Macedonia, Republic of":
      totalCases.innerText = commaNumber(countryName[100].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[100].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[100].TotalRecovered);
      break;
    case "Madagascar":
      totalCases.innerText = commaNumber(countryName[101].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[101].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[101].TotalRecovered);
      break;
    case "Malawi":
      totalCases.innerText = commaNumber(countryName[102].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[102].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[102].TotalRecovered);
      break;
    case "Malaysia":
      totalCases.innerText = commaNumber(countryName[103].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[103].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[103].TotalRecovered);
      break;
    case "Maldives":
      totalCases.innerText = commaNumber(countryName[104].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[104].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[104].TotalRecovered);
      break;
    case "Mali":
      totalCases.innerText = commaNumber(countryName[105].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[105].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[105].TotalRecovered);
      break;
    case "Malta":
      totalCases.innerText = commaNumber(countryName[106].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[106].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[106].TotalRecovered);
      break;
    case "Mauritania":
      totalCases.innerText = commaNumber(countryName[107].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[107].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[107].TotalRecovered);
      break;
    case "Mauritius":
      totalCases.innerText = commaNumber(countryName[108].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[108].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[108].TotalRecovered);
      break;
    case "Mexico":
      totalCases.innerText = commaNumber(countryName[109].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[109].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[109].TotalRecovered);
      break;
    case "Moldova":
      totalCases.innerText = commaNumber(countryName[110].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[110].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[110].TotalRecovered);
      break;
    case "Monaco":
      totalCases.innerText = commaNumber(countryName[111].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[111].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[111].TotalRecovered);
      break;
    case "Mongolia":
      totalCases.innerText = commaNumber(countryName[112].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[112].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[112].TotalRecovered);
      break;
    case "Montenegro":
      totalCases.innerText = commaNumber(countryName[113].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[113].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[113].TotalRecovered);
      break;
    case "Morocco":
      totalCases.innerText = commaNumber(countryName[114].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[114].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[114].TotalRecovered);
      break;
    case "Mozambique":
      totalCases.innerText = commaNumber(countryName[115].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[115].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[115].TotalRecovered);
      break;
    case "Myanmar":
      totalCases.innerText = commaNumber(countryName[116].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[116].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[116].TotalRecovered);
      break;
    case "Namibia":
      totalCases.innerText = commaNumber(countryName[117].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[117].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[117].TotalRecovered);
      break;
    case "Nepal":
      totalCases.innerText = commaNumber(countryName[118].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[118].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[118].TotalRecovered);
      break;
    case "Netherlands":
      totalCases.innerText = commaNumber(countryName[119].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[119].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[119].TotalRecovered);
      break;
    case "New Zealand":
      totalCases.innerText = commaNumber(countryName[120].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[120].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[120].TotalRecovered);
      break;
    case "Nicaragua":
      totalCases.innerText = commaNumber(countryName[121].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[121].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[121].TotalRecovered);
      break;
    case "Niger":
      totalCases.innerText = commaNumber(countryName[122].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[122].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[122].TotalRecovered);
      break;
    case "Nigeria":
      totalCases.innerText = commaNumber(countryName[123].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[123].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[123].TotalRecovered);
      break;
    case "Norway":
      totalCases.innerText = commaNumber(countryName[124].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[124].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[124].TotalRecovered);
      break;
    case "Oman":
      totalCases.innerText = commaNumber(countryName[125].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[125].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[125].TotalRecovered);
      break;
    case "Pakistan":
      totalCases.innerText = commaNumber(countryName[126].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[126].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[126].TotalRecovered);
      break;
    case "Palestinian Territory":
      totalCases.innerText = commaNumber(countryName[127].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[127].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[127].TotalRecovered);
      break;
    case "Panama":
      totalCases.innerText = commaNumber(countryName[128].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[128].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[128].TotalRecovered);
      break;
    case "Papua New Guinea":
      totalCases.innerText = commaNumber(countryName[129].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[129].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[129].TotalRecovered);
      break;
    case "Paraguay":
      totalCases.innerText = commaNumber(countryName[130].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[130].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[130].TotalRecovered);
      break;
    case "Peru":
      totalCases.innerText = commaNumber(countryName[131].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[131].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[131].TotalRecovered);
      break;
    case "Philippines":
      totalCases.innerText = commaNumber(countryName[132].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[132].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[132].TotalRecovered);
      break;
    case "Poland":
      totalCases.innerText = commaNumber(countryName[133].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[133].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[133].TotalRecovered);
      break;
    case "Portugal":
      totalCases.innerText = commaNumber(countryName[134].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[134].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[134].TotalRecovered);
      break;
    case "Qatar":
      totalCases.innerText = commaNumber(countryName[135].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[135].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[135].TotalRecovered);
      break;
    case "Republic of Kosovo":
      totalCases.innerText = commaNumber(countryName[136].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[136].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[136].TotalRecovered);
      break;
    case "Romania":
      totalCases.innerText = commaNumber(countryName[137].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[137].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[137].TotalRecovered);
      break;
    case "Russian Federation":
      totalCases.innerText = commaNumber(countryName[138].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[138].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[138].TotalRecovered);
      break;
    case "Rwanda":
      totalCases.innerText = commaNumber(countryName[139].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[139].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[139].TotalRecovered);
      break;
    case "Saint Kitts and Nevis":
      totalCases.innerText = commaNumber(countryName[140].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[140].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[140].TotalRecovered);
      break;
    case "Saint Lucia":
      totalCases.innerText = commaNumber(countryName[141].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[141].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[141].TotalRecovered);
      break;
    case "Saint Vincent and Grenadines":
      totalCases.innerText = commaNumber(countryName[142].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[142].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[142].TotalRecovered);
      break;
    case "San Marino":
      totalCases.innerText = commaNumber(countryName[143].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[143].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[143].TotalRecovered);
      break;
    case "Sao Tome and Principe":
      totalCases.innerText = commaNumber(countryName[144].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[144].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[144].TotalRecovered);
      break;
    case "Saudi Arabia":
      totalCases.innerText = commaNumber(countryName[145].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[145].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[145].TotalRecovered);
      break;
    case "Senegal":
      totalCases.innerText = commaNumber(countryName[146].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[146].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[146].TotalRecovered);
      break;
    case "Serbia":
      totalCases.innerText = commaNumber(countryName[147].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[147].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[147].TotalRecovered);
      break;
    case "Seychelles":
      totalCases.innerText = commaNumber(countryName[148].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[148].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[148].TotalRecovered);
      break;
    case "Sierra Leone":
      totalCases.innerText = commaNumber(countryName[149].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[149].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[149].TotalRecovered);
      break;
    case "Singapore":
      totalCases.innerText = commaNumber(countryName[150].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[150].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[150].TotalRecovered);
      break;
    case "Slovakia":
      totalCases.innerText = commaNumber(countryName[151].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[151].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[151].TotalRecovered);
      break;
    case "Slovenia":
      totalCases.innerText = commaNumber(countryName[152].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[152].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[152].TotalRecovered);
      break;
    case "Somalia":
      totalCases.innerText = commaNumber(countryName[153].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[153].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[153].TotalRecovered);
      break;
    case "South Africa":
      totalCases.innerText = commaNumber(countryName[154].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[154].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[154].TotalRecovered);
      break;
    case "South Sudan":
      totalCases.innerText = commaNumber(countryName[155].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[155].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[155].TotalRecovered);
      break;
    case "Spain":
      totalCases.innerText = commaNumber(countryName[156].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[156].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[156].TotalRecovered);
      break;
    case "Sri Lanka":
      totalCases.innerText = commaNumber(countryName[157].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[157].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[157].TotalRecovered);
      break;
    case "Sudan":
      totalCases.innerText = commaNumber(countryName[158].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[158].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[158].TotalRecovered);
      break;
    case "Suriname":
      totalCases.innerText = commaNumber(countryName[159].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[159].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[159].TotalRecovered);
      break;
    case "Swaziland":
      totalCases.innerText = commaNumber(countryName[160].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[160].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[160].TotalRecovered);
      break;
    case "Sweden":
      totalCases.innerText = commaNumber(countryName[161].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[161].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[161].TotalRecovered);
      break;
    case "Switzerland":
      totalCases.innerText = commaNumber(countryName[162].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[162].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[162].TotalRecovered);
      break;
    case "Syrian Arab Republic (Syria)":
      totalCases.innerText = commaNumber(countryName[163].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[163].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[163].TotalRecovered);
      break;
    case "Taiwan, Republic of China":
      totalCases.innerText = commaNumber(countryName[164].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[164].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[164].TotalRecovered);
      break;
    case "Tajikistan":
      totalCases.innerText = commaNumber(countryName[165].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[165].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[165].TotalRecovered);
      break;
    case "Tanzania, United Republic of":
      totalCases.innerText = commaNumber(countryName[166].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[166].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[166].TotalRecovered);
      break;
    case "Thailand":
      totalCases.innerText = commaNumber(countryName[167].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[167].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[167].TotalRecovered);
      break;
    case "Timor-Leste":
      totalCases.innerText = commaNumber(countryName[168].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[168].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[168].TotalRecovered);
      break;
    case "Togo":
      totalCases.innerText = commaNumber(countryName[169].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[169].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[169].TotalRecovered);
      break;
    case "Trinidad and Tobago":
      totalCases.innerText = commaNumber(countryName[170].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[170].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[170].TotalRecovered);
      break;
    case "Tunisia":
      totalCases.innerText = commaNumber(countryName[171].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[171].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[171].TotalRecovered);
      break;
    case "Turkey":
      totalCases.innerText = commaNumber(countryName[172].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[172].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[172].TotalRecovered);
      break;
    case "Uganda":
      totalCases.innerText = commaNumber(countryName[173].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[173].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[173].TotalRecovered);
      break;
    case "Ukraine":
      totalCases.innerText = commaNumber(countryName[174].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[174].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[174].TotalRecovered);
      break;
    case "United Arab Emirates":
      totalCases.innerText = commaNumber(countryName[175].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[175].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[175].TotalRecovered);
      break;
    case "United Kingdom":
      totalCases.innerText = commaNumber(countryName[176].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[176].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[176].TotalRecovered);
      break;
    case "United States of America":
      totalCases.innerText = commaNumber(countryName[177].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[177].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[177].TotalRecovered);
      break;
    case "Uruguay":
      totalCases.innerText = commaNumber(countryName[178].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[178].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[178].TotalRecovered);
      break;
    case "Uzbekistan":
      totalCases.innerText = commaNumber(countryName[179].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[179].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[179].TotalRecovered);
      break;
    case "Venezuela (Bolivarian Republic)":
      totalCases.innerText = commaNumber(countryName[180].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[180].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[180].TotalRecovered);
      break;
    case "Viet Nam":
      totalCases.innerText = commaNumber(countryName[181].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[181].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[181].TotalRecovered);
      break;
    case "Western Sahara":
      totalCases.innerText = commaNumber(countryName[182].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[182].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[182].TotalRecovered);
      break;
    case "Yemen":
      totalCases.innerText = commaNumber(countryName[183].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[183].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[183].TotalRecovered);
      break;
    case "Zambia":
      totalCases.innerText = commaNumber(countryName[184].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[184].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[184].TotalRecovered);
      break;
    case "Zimbabwe":
      totalCases.innerText = commaNumber(countryName[185].TotalConfirmed);
      totalDeath.innerText = commaNumber(countryName[185].TotalDeaths);
      totalRecovered.innerText = commaNumber(countryName[185].TotalRecovered);
      break;
  }
}

fetchCovidData();

function displayData(covid) {
  console.log(covid);

  totalCases.innerText = commaNumber(covid.tCases);
  totalDeath.innerText = commaNumber(covid.tDeath);
  totalRecovered.innerText = commaNumber(covid.tRecovered);
}

function commaNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateSelectCountries(country) {
  for (let i = 0; i <= 185; i++) {
    let selectOption = document.createElement("option");
    selectOption.innerText = country[i].Country;
    selectOption.value = i;
    selectOption.classList.add("country");
    countryList.appendChild(selectOption);
  }
}

const allCountries = document.querySelector(".country-list");

// function updateDataForCountry(information) {
//   console.log(information);
// }

// updateDataForCountry();
