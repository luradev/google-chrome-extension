

async function fetchData(){
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    const record = await res.json();
    document.getElementById("todayCases").innerHTML = record.todayCases;
    document.getElementById("todayDeaths").innerHTML = record.todayDeaths;
    document.getElementById("todayRecovered").innerHTML = record.todayRecovered;
    document.getElementById("affectedCountries").innerHTML = record.deaths;

}
fetchData();

