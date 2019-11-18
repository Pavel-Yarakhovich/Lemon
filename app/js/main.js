//header hide-show
const header = document.querySelector('.header');
const showMenu = document.querySelector('.show_menu');
let scroll = 0;

window.addEventListener('scroll', function() {
	let scroll1 = this.pageYOffset;
	if (scroll1 > scroll) {
		header.classList.remove('header');
		header.classList.add('header_hidden');
		showMenu.setAttribute('style', 'transform: rotate(-135deg); bottom: 10px')
	} else {
		header.classList.remove('header_hidden');
		header.classList.add('header');
		showMenu.setAttribute('style', 'transform: rotate(45deg)');
	} 
	scroll = scroll1;
  });

//toTopButton 
const toTopButton = document.getElementById('toTopButton');
const recipes = document.querySelector('.main__recipe-gallery');

window.addEventListener('scroll', function() {
	this.pageYOffset > 200
	? toTopButton.classList.remove('toTopButtonHidden')
	: toTopButton.classList.add('toTopButtonHidden');
})

toTopButton.addEventListener('click', function() {
	document.body.scrollIntoView( {block: "start", inline: "nearest"});
})
