const userIcon = document.querySelector('.user-header__icon');
const wrapper = document.querySelector('.wrapper');

userIcon.addEventListener('click', function () {
	const userMenu = document.querySelector('.user-header__menu');
	userMenu.classList.toggle('active');
})

wrapper.addEventListener('click', function (ev) {
	if (!ev.target.closest('.user-header')) {
		const userMenu = document.querySelector('.user-header__menu');
		userMenu.classList.remove('active');
	}
})

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu__body');
const link = document.querySelectorAll('.menu__link');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock1');
});

////////

link.forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.preventDefault();
		let name = el.getAttribute('href');
		let blockOffset = document.querySelector(name).offsetTop - document.querySelector('.header').clientHeight;
		window.scrollTo({
			behavior: 'smooth',
			left: 0,
			top: blockOffset
		});
		if (menu.classList.contains('active')) {
			burger.classList.remove('active');
			menu.classList.remove('active');
			document.body.classList.remove('lock1');
		}

	})
})

// // Картинку в фон

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {

			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// // Свайперы

const mainSlider = new Swiper('.main-slider', {

	slidesPerView: 1,
	autoHeight: true,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.control-main-slider__btn_next',
		prevEl: '.control-main-slider__btn_prev',
	},
});

const lotsSlider = new Swiper('.lots__slider', {

	slidesPerView: 3,
	observer: true,
	observeParents: true,
	loop: true,
	navigation: {
		nextEl: '.control-slider-lots__next',
		prevEl: '.control-slider-lots__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		572: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		853: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		980: {
			slidesPerView: 3,
			spaceBetween: 90,
		}
	}
});

const quotesSlider = new Swiper('.slider-quotes', {

	slidesPerView: 1,
	observer: true,
	observeParents: true,
	loop: true,
	speed: 800,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.control-quotes__btn',
	},
})

// //Валидация

const validateForm = (selector, rules) => {
	new window.JustValidate(selector, {
		rules: rules,
		messages: {
			email: 'Некорректный email'
		}

	});
}

validateForm('.form-subscribe', {
	email: { required: true, email: true },

});

validateForm('.modal--1__form', {
	name: { required: true },
	tel: { required: true }

});

let input = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(input);


/////////////////////////////////////////////

const btn = document.querySelector('.footer__callback');
const overlay = document.querySelector('.modals__overlay');
const modals = document.querySelector('.modal');

const disableScroll = () => {
	let pagePosition = window.scrollY;
	document.body.dataset.position = pagePosition;
	document.body.classList.add('disable-scroll');
	document.body.style.top = -pagePosition + 'px';
}

const enableScrool = () => {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.classList.remove('disable-scroll');
	document.body.style.top = 'auto';
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

const showModal = () => {

	btn.addEventListener('click', () => {
		event.preventDefault();
		overlay.classList.add('active');
		modals.classList.add('active');
		disableScroll();
	})

	overlay.addEventListener('click', (ev) => {
		if (ev.target === overlay) {
			overlay.classList.remove('active');
			modals.classList.remove('active');
			enableScrool();
		}
	})

	document.querySelector('.modal--1__close').addEventListener('click', () => {
		overlay.classList.remove('active');
		modals.classList.remove('active');
		enableScrool();
	})
}

showModal();