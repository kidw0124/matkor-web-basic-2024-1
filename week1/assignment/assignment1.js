let num = prompt("몇번 치실래요?");

num = Number(num);
// num = parseInt(num);

const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("egg");

cnt_dom.innerHTML = num;

const org_num = num;
const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const hitEgg = () => {
	num--;
	cnt_dom.innerHTML = num;
	cnt_dom.style.color = color[Math.floor(((org_num - num) / org_num) * 7)];
	if (num == 0) {
		alert("성공!");
	}
};

egg_dom.addEventListener("click", hitEgg);

// for (let i = 0; i < org_num; i++) {
// 	egg_dom.click();
// 	console.log(i);
// }
