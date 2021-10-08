// for base.html file
const footer = document.querySelector(".footer");
const settingBox = document.getElementById("setting-box");
const settingOpen = document.getElementById("setting-icon");
const settingClose = document.querySelector(".fa-close");
const footerColor = document.getElementById("footer-color");

// for detail.html file
const detailImg = document.querySelector(".detail-img");
const detailImgContainer = document.querySelector(".detail-img-container");


// adding event listeners to base file
settingOpen.addEventListener('click', ()=> {
    settingBox.style.height = "50px";
})
settingClose.addEventListener('click', ()=> {
    settingBox.style.height = "0";
})
footerColor.addEventListener('change', ()=> {
    footer.style.backgroundColor = footerColor.value;
})


// adding animation to detail page
if (detailImgContainer !== null) {
	detailImgContainer.addEventListener('mousemove', (event)=> {
		let degreeX;
		let degreeY;

		if (window.innerWidth < 640) {
			degreeX = (window.innerWidth/2 - event.x) / 7;
			degreeY = (window.innerHeight/2 - event.y) / 7;
		} else if (window.innerWidth < 1008 && window.innerWidth > 640) {
			degreeX = (window.innerWidth/2 - event.x) / 10;
			degreeY = (window.innerHeight/2 - event.y) / 10;
		} else {
			degreeX = (window.innerWidth/2 - event.x) / 15;
			degreeY = (window.innerHeight/2 - event.y) / 15;
		}

		detailImg.style.transform = `rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
		detailImg.style.transition = "padding 0.5s ease";

	});
	detailImgContainer.addEventListener('mouseleave', ()=> {
		detailImg.style.transform = `rotateX(0deg) rotateY(0deg)`;
		detailImg.style.transition = "all 0.5s ease";
	});
}

// creating footer date and clock
function updateTime() {
	const fullDate = new Date();

	let hh = fullDate.getHours();
	let mm = fullDate.getMinutes();
	let ss = fullDate.getSeconds();

	hh = (hh < 10)? "0" + hh: hh;
	mm = (mm < 10)? "0" + mm: mm;
	ss = (ss < 10)? "0" + ss: ss;

	let time = `${hh} : ${mm} : ${ss}`;

	document.querySelector("#time").innerText = time;
}

function updateDate() {
	const fullDate = new Date();
	const monthList = ['January', 'February', 'March', 'April',
	'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'];

	let year = fullDate.getFullYear();
	let month = monthList[fullDate.getMonth()];
	let date = fullDate.getDate();
	let today = `${month} : ${date} : ${year}`;
	document.querySelector("#date").innerText = today;
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);

