years = document.getElementById('sub-nav').children
decades = ['196','197','198','199','200','201','202']
//below gets the current school year, offset by about 7 months to match up with the hall of fame
currentyear = new Date(new Date().getFullYear(), new Date().getMonth() - 7).getFullYear().toString()
function select(s) {
	// this loops for every year in the years array (variable "years")
	for (let i = 0; i < years.length; i++) {
		// checks if the current year being edited is the current year or a year preceding the current year, and if so proceeds to hide the element
		if (decades[s] + i >= currentyear) {
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