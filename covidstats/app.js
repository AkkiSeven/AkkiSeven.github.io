window.onload = function () {
  getCovidStats()
  getCovidStatsAmerica()
}

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/145')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      let population = data.location.country_population;
      let update = data.location.last_updated;
      let confirmedCases = data.location.latest.confirmed;
      let deaths = data.location.latest.deaths;
      let country = data.location.country;
      document.getElementById('population').innerHTML = population.toLocaleString('en');
      document.getElementById('country').innerHTML = country.toLocaleString('en');
      document.getElementById('update').innerHTML = update.substr(0, 10);
      document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
      document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
      document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
    })
    .catch(function () {
      console.log("error");
    })
}

function getCovidStatsAmerica() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/247')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      let population_us = data.location.country_population;
      let update_us = data.location.last_updated;
      let confirmedCases_us = data.location.latest.confirmed;
      let deaths_us = data.location.latest.deaths;
      let country = data.location.country;
      document.getElementById('population-us').innerHTML = population_us.toLocaleString('en');
      document.getElementById('country-us').innerHTML = country.toLocaleString('en');
      document.getElementById('update-us').innerHTML = update_us.substr(0, 10);
      document.getElementById('cases-us').innerHTML = confirmedCases_us.toLocaleString('en');
      document.getElementById('deaths-us').innerHTML = deaths_us.toLocaleString('en');
      document.getElementById('percent-us').innerHTML = ((Number(deaths_us)/Number(confirmedCases_us))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
    })
    .catch(function () {
      console.log("error");
    })
}