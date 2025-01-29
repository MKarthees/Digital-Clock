// This is Switch for Digital Clock or Stop Watch (Navigation) JavaScript Code

const clock_container_one = document.querySelector('.clock_container_one');
const clock_container_two = document.querySelector('.clock_container_two');
const layout = document.querySelector('.layout');
const digitalClockBtn = document.getElementById('digital_clock');
const stopWatchBtn = document.getElementById('stop_watch');

digitalClockBtn.addEventListener('click', () => {
	clock_container_one.classList.remove('active');
	clock_container_two.classList.add('active');
	layout.style.display = 'none';
});

stopWatchBtn.addEventListener('click', () => {
	clock_container_one.classList.add('active');
	clock_container_two.classList.remove('active');
	layout.style.display = 'none';
});

//Digital Clock JavaScript Code

function digitalWatch(params) {
	let twenty_four_display = document.getElementById('twenty_four_display');
	let twelve_display = document.getElementById('twelve_display');
	let meridian_display = document.getElementById('meridian');

	let h = 0;
	let m = 0;
	let s = 0;

	setInterval(() => {
		const time = new Date();
		h = time.getHours();
		m = time.getMinutes();
		s = time.getSeconds();
		let hour = h < 10 ? '0' + h : h;
		let min = m < 10 ? '0' + m : m;
		let sec = s < 10 ? '0' + s : s;
		twenty_four_display.innerHTML = hour + ':' + min + ':' + sec;
	}, 1000);

	setInterval(() => {
		const time = new Date();
		h = time.getHours();
		m = time.getMinutes();
		s = time.getSeconds();

		if (h < 12 || h == 24) {
			meridian_display.innerHTML = 'AM';
		} else {
			meridian_display.innerHTML = 'PM';
		}
		let hour = h > 12 ? h % 12 : h;
		if (hour == 0) {
			hour = '12';
		}

		const hrs = hour < 10 ? '0' + hour : hour;
		const min = m < 10 ? '0' + m : m;
		const sec = s < 10 ? '0' + s : s;

		twelve_display.innerHTML = hrs + ':' + min + ':' + sec;
	}, 1000);
}

//Stop Watch JavaScript Code

function stopWatch(params) {
	const startBtn = document.querySelector('.start_btn');
	const stopBtn = document.querySelector('.stop_btn');
	const resetBtn = document.querySelector('.reset_btn');

	let hour = document.getElementById('hour');
	let min = document.getElementById('min');
	let sec = document.getElementById('sec');

	let hr = 0;
	let mi = 0;
	let sc = 0;

	let timer = null;

	function myTimer() {
		sc++;
		if (sc == 60) {
			sc = 0;
			mi++;
			if (mi == 60) {
				mi = 0;
				hour++;
			}
		}
		sec.innerText = sc < 10 ? '0' + sc : sc;
		min.innerHTML = mi < 10 ? '0' + mi : mi;
		hour.innerHTML = hr < 10 ? '0' + hr : hr;
	}

	function startTimer() {
		if (timer !== null) {
			clearInterval(timer);
		}
		timer = setInterval(myTimer, 1000);
	}

	function stopTimer() {
		clearInterval(timer);
	}
	function resetTimer() {
		sec.innerHTML = '00';
		min.innerHTML = '00';
		hour.innerHTML = '00';
		hr = 0;
		mi = 0;
		sc = 0;
	}
	startBtn.addEventListener('click', startTimer);
	stopBtn.addEventListener('click', stopTimer);
	resetBtn.addEventListener('click', resetTimer);
}
//By Karthees
