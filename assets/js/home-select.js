years = document.getElementById('sub-nav').children
decades = ['196','197','198','199','200','201','202']
currentyear = '2022'
function select(s) {
	for (let i = 0; i < years.length; i++) {
		if (decades[s] + i >= currentyear) {
			years[i].innerHTML = '';
			years[i].style.display = 'none';
		}
		else {
			years[i].innerHTML = decades[s] + i;
			years[i].style.display = 'block';
		}
	}
}