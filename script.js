document.addEventListener("input", input);
function input() {
	let input_data = document.getElementById("input").value;
	output_data = document.getElementById("output").innerHTML =
		"Typing : " + input_data;
}
