//header hide-show
const header = document.querySelector('.header');
const showMenu = document.querySelector('.show_menu');
let scroll = 0;
let headerCoords = header.getBoundingClientRect();

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
	document.body.scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"});
})

const isPartiallyVisible = el => {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

const isFullyVisible = el => {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
}

const recipeGallery = document.querySelector('.main__recipe-gallery');
const recipeGalleryItems = document.querySelectorAll('.main__recipe-gallery-item');

window.addEventListener('scroll', function() {
	if (isFullyVisible(recipeGallery) || isPartiallyVisible(recipeGallery)) {
		recipeGalleryItems.forEach((item, i) => {
			this.setTimeout(() => {
				item.classList.add('main__recipe-gallery-item-shown')
			}, (i+1)*300);
		})
	} else {
		recipeGalleryItems.forEach(item => {
			item.classList.remove('main__recipe-gallery-item-shown');
		})
	}
})
