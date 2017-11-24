'use strict'

let blurCount = 0;
let focusCount = 0;
let keyupCount = 0;
let changeCount = 0;
let keydownCount = 0;
let keypressCount = 0;

function inFocus(event) {
	let text = document.querySelector('.text');
	text.classList.toggle('shadowInput');
}

function inBlur(event) {
	let text = document.querySelector('.text');
	text.classList.toggle('shadowInput');
}

function clearAll() {
	blurCount = 0;
	focusCount = 0;
	keyupCount = 0;
	changeCount = 0;
	keydownCount = 0;
	keypressCount = 0;
	document.querySelector('.text').value ='';
	document.getElementById('info').innerHTML ='';
	document.querySelector('.repeat').innerHTML ='';
}

function repeatFromText(event) {
	let text = document.querySelector('.text');
	let repeat = document.querySelector('.repeat');
	repeat.innerHTML = text.value;
}


function showAllEvent() {
	let info = document.getElementById('info');
	info.innerHTML ='Blur ' + blurCount + '</br>' +
					'Focus ' + focusCount + '</br>' +
					'Keyup ' + keyupCount + '</br>' +
					'Change ' + changeCount + '</br>' +
					'Keydown ' + keydownCount + '</br>' +
					'Keypress ' + keypressCount + '</br>';
}


function blurCounter() { blurCount++; showAllEvent(); };
function focusCounter() { focusCount++; showAllEvent(); };
function keyupCounter() { keyupCount++; showAllEvent(); };
function changeCounter() { changeCount++; showAllEvent(); };
function keydownCounter() { keydownCount++; showAllEvent(); };
function keypressCounter(event) { 
	keypressCount++; 
	showAllEvent();
	let code = event.keyCode || event.which;
	let codeChar = String.fromCharCode(code);
	if(code == '1072') {
		return code == '1040'
	}
};


document.querySelector('.button').addEventListener("click", clearAll);
document.querySelector('.text').addEventListener("focus", inFocus);
document.querySelector('.text').addEventListener("blur", inBlur);
document.querySelector('.text').addEventListener("blur", blurCounter);
document.querySelector('.text').addEventListener("focus", focusCounter);
document.querySelector('.text').addEventListener("keyup", keyupCounter);
document.querySelector('.text').addEventListener("change", changeCounter);
document.querySelector('.text').addEventListener("keydown", keydownCounter);
document.querySelector('.text').addEventListener("keypress", keypressCounter);
document.querySelector('.text').addEventListener("keypress", repeatFromText);

