const heart = document.querySelector('.heart');
const textMain = document.querySelector('.text-main');
const textSecond = document.querySelector('.text-second')


heart.addEventListener('click', () => {
	if (textSecond.classList.contains('active')) {
		textSecond.classList.remove('active');
		textMain.classList.remove('hidden');

	} else if (!textSecond.classList.contains('active')) {
		textSecond.classList.toggle('active');
		textMain.classList.add('hidden');
	}
});

