
/*
async function fetchData(){
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    document.getElementById("date").innerHTML = record.data[0].date;
    document.getElementById("country").innerHTML = record.data[0].areaName;
    document.getElementById("casesConfirmed").innerHTML = record.data[0].latestBy;
    document.getElementById("deaths").innerHTML = record.data[0].deathNew;

}
fetchData();
*/


async function fetchData(){
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    const record = await res.json();
    document.getElementById("todayCases").innerHTML = record.todayCases;
    document.getElementById("todayDeaths").innerHTML = record.todayDeaths;
    document.getElementById("todayRecovered").innerHTML = record.todayRecovered;
    document.getElementById("affectedCountries").innerHTML = record.deaths;

}
fetchData();

