let val = document.getElementById('numberInput');
let noti = document.getElementById('message');
let btn = document.getElementById('button');
let correct = Math.floor(Math.random() * 11);
let turn = 10;
let newGame = document.getElementById('newGame');
val.focus();

btn.addEventListener('click', function() {
	checking();
});

val.addEventListener('keyup', function(e) {
	e.preventDefault();
	if(e.keyCode == 13) {
		btn.click();
	}
});

function checking() {
	if(Number(val.value) != correct) {
		Number(val.value) > correct ?
			noti.innerHTML = `Sorry your gress is too high, gress lower. You have ${turn} guesses left.` :
			noti.innerHTML = `Sorry your gress is too low, gress higher. You have ${turn} guesses left.`;
			noti.classList.add('wrong');
		val.value = '';
		val.focus();
		if (turn <= 0) {
			val.disabled = true;
			
			newGame.innerHTML = 'Try Again!';
			newGame.setAttribute('href', '');
		}
		--turn;
	} else {
		val.disabled = true;
		noti.innerHTML = `Congratulation! ${correct} was the correct answer! It took you ${(10 - turn) + 1} tries to gress the answer.`;
		noti.classList.add('correct');

		newGame.innerHTML = 'New Game';
		newGame.setAttribute('href', '');
	}
}