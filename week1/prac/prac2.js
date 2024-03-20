const headerRow = document.getElementById("header-row");
const button = document.getElementById("btn");

console.log(headerRow);
console.log(button);

const changeRed = () => {
	console.log("changeRed");
	headerRow.style.color = "red";
};
button.addEventListener("click", changeRed);

console.log(headerRow);
console.log(button);
