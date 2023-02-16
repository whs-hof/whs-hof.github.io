years = document.getElementById('nav-year').children
decades = ['196','197','198','199','200','201','202']
ignore = ['1960','1961','1962','1963','1964']
//below gets the current school year, offset by about 7 months to match up with the hall of fame
currentyear = new Date(new Date().getFullYear(), new Date().getMonth() - 7).getFullYear().toString()
function select(s) {
	document.getElementById('nav-year').style.display = 'flex';
	document.getElementById('back').style.visibility = 'visible';
	document.getElementById('nav-dec').style.display = 'none';
	// this loops for every year in the years array (variable "years")
	for (let i = 0; i < years.length; i++) {
		// checks if the current year being edited is the current year or a year preceding the current year, and if so proceeds to hide the element
		if (decades[s] + i >= currentyear || ignore.includes(decades[s] + i)) {
			years[i].innerHTML = '';
			years[i].style.display = 'none';
		}
		// if the above check fails, then assume that the year is past and already posted on the website, and change the decade accordingly
		else {
			years[i].innerHTML = decades[s] + i;
			years[i].style.display = 'block';
		}
		// i have a love-hate relationship with javascript
	}
}

function back() {
	document.getElementById('nav-year').style.display = 'none';
	document.getElementById('back').style.visibility = 'hidden';
	document.getElementById('nav-dec').style.display = 'flex';
}