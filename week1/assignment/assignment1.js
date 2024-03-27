let num = prompt("몇번 치실래요?");

num = Number(num);
// num = parseInt(num);

const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("egg");

cnt_dom.innerHTML = num;

const hitEgg = () => {
	num--;
	cnt_dom.innerHTML = num;
	if (num == 0) {
		alert("성공!");
	}
};

egg_dom.addEventListener("click", hitEgg);

for (let i = 0; i < num; i++) {
	egg_dom.click();
	console.log(i);
}
