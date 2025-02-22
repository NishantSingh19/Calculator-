let input = document.getElementById('insert');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);

arr.forEach(button => {
	button.addEventListener('click',(e) => {
		if (e.target.innerHTML == '=') {
			string = eval(string);
			input.value = string;
			saveData();
		}

		else if (e.target.innerHTML == 'AC') {
			string = "";
			input.value = string;
			saveData();
		}

			else if (e.target.innerHTML == 'DEL') {
			string = string.substring(0 , string.slice-1);
			input.value = string;
			saveData();
		}

		else{
			string += e.target.innerHTML;
			input.value = string;
			saveData();
		}
	})
})

function saveData(){
    localStorage.setItem("data",input.value);
}
function showTask(){
    input.value = localStorage.getItem("data");
}
showTask();