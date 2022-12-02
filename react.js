let cont = 0;
const change = document.getElementById("change");

function inc() {
	cont++;
	change.innerText = cont;
}
function dec() {
	cont--;
	change.innerText = cont;
}
