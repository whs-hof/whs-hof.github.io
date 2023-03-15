/*
  class.js
  "to parse, or not to parse. that is the question."
  by daniel aguilar (c) 2023
*/

//initialize variables

awards = ['bodypres', 'seniorpres', 'outstanding', 'valedictorian', 'salutatorian', 'english', 'history', 'math', 'science', 'art', 'drama', 'music', 'worldlang', 'boyspe', 'girlspe', 'business', 'industrial', 'economics', 'service']
for (let i = 0; i < awards.length; i++) {
  // possibly the worst way to do this
  eval('elem' + awards[i] + ' = document.getElementsByClassName("' + awards[i] + '")[0];')
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

//error function to make this process absolutely idiot-proof

function doError(error) {
  alert('ERROR!\n' + error);
  throw new Error(error);
}

year = new URLSearchParams(window.location.search).get('year');
elemyear = document.getElementById('year');

//checks if year is missing, and if year is a four-digit number (it should be)

if (year == null) {
  doError('URL is missing the year.\n(The year should append the URL: "[URL]?year=[YEAR]")')
} else if (year.length !== 4) {
  doError('Year in URL is not a four-digit number.')
}

//checks if json of selected year is present

try {
  data = JSON.parse(httpGet(window.location.href.split('/').slice(0, -1).join('/') + '/' + '/assets/class/' + year + '.json'));
} catch {
  doError('Could not find JSON of chosen year (which is ' + year + ').\nEnsure the file is in the "/assets/class/" directory, and named "' + year + '.json".')
}

//now the fun part. this takes all of the names from the json, and adds them to the HTML document.
//should the JSON not be formatted correctly, it will throw an error

elemyear.innerHTML = year
for (let i = 0; i < awards.length; i++) {
  if (data[awards[i]] == undefined) {
    doError('JSON does not include award "' + awards[i] + '". Did you delete it from the template copy?')
  }
  for (let j = 0; j < data[awards[i]].length; j++) {
    const div = document.createElement("div");
    div.innerHTML = data[awards[i]][j]
    eval('elem' + awards[i] + '.getElementsByClassName("names")[0].appendChild(div);');
  }
}
