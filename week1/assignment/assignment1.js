let num = prompt("몇번 치실래요?");

num = Number(num);
// num = parseInt(num);

const cnt1_dom = document.getElementById("cnt1");
const egg1_dom = document.getElementById("egg1");
const cnt2_dom = document.getElementById("cnt2");
const egg2_dom = document.getElementById("egg2");

cnt1_dom.innerHTML = num;
cnt2_dom.innerHTML = num;

const org_num = num;
let num1 = num;
let num2 = num;

const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const hitEgg1 = () => {
	num1--;
	cnt1_dom.innerHTML = num1;
	cnt1_dom.style.color = color[Math.floor(((org_num - num1) / org_num) * 7)];
	if (num1 == 0) {
		alert("성공!");
	}
};

const hitEgg2 = () => {
	num2--;
	cnt2_dom.innerHTML = num2;
	cnt2_dom.style.color = color[Math.floor(((org_num - num2) / org_num) * 7)];
	if (num2 == 0) {
		alert("성공!");
	}
};

egg1_dom.addEventListener("click", hitEgg1);
egg2_dom.addEventListener("click", hitEgg2);

// for (let i = 0; i < org_num; i++) {
// 	egg_dom.click();
// 	console.log(i);
// }
