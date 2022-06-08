import {testFunction} from './scripts/test';
testFunction();

  const swiper = new Swiper('.slider__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10
  });
  

  const menu = document.querySelector('.js-menu');
  const nav = document.querySelector('.js-nav');
  const profile = document.querySelector('.js-profile');
  const profileImg = document.querySelector('.js-profile-img');
  const burger = document.querySelector('.js-burger');
  const logo = document.querySelector('.js-logo');
  const grid = document.querySelector('.js-grid');
  const container = document.querySelector('.js-container');

  burger.addEventListener('click', ()=>{  
  burger.classList.toggle('burger--active');
  logo.classList.toggle('logo__img-name--active');
  nav.classList.toggle('nav--active');
  profile.classList.toggle('profile--active');
  profileImg.classList.toggle('profile-img--active');
  menu.classList.toggle('menu--active');
  grid.classList.toggle('grid--active');
  container.classList.toggle('container--active');
  });

  const swiperStatistic = new Swiper('.statistic__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "3",
    spaceBetween: 26,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var config = {
	type: 'line',
	data: {
		labels: [  
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек'],
			datasets: [{
			backgroundColor: window.chartColors.blue,
			borderColor: [
				'#00D322'
			],
			fill: false,
			data: [
				75,
				80,
				78,
				80,
				78,
				83,
				85,
				85,
				89,
				85,
				80,
				83
					]

				}]
				},
	options: {
		elements: {
			point:{
				radius: 0
			}
		},
                
		legend: {
			display: false
		  },
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
					display: true ,
					color: "transparent"
				  },
				display: true,
				scaleLabel: {
					display: true,
					// labelString: 'Date'
					
	  			},
				  ticks: {
					padding: 30,
					fontSize: 15,
					color: "#767676"
				}
		
			}],
			yAxes: [{
				gridLines: {
					display: true ,
					color: "#292929",
					drawBorder: false,
				  },
				backgroundColor: window.chartColors.blue,
				display: true,
				//type: 'logarithmic',
	  			scaleLabel: {
					display: true,
					},

					ticks: {
						min: 75,
						max: 90,
						padding: 36,
						fontSize: 15,
						color: "#767676",
						// forces step size to be 5 units
						stepSize: 5
					}
			}]
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');
	window.myLine = new Chart(ctx, config);

};

// 	document.getElementById('randomizeData').addEventListener('click', function() {
// 		config.data.datasets.forEach(function(dataset) {
// 			dataset.data = dataset.data.map(function() {
// 				return randomScalingFactor();
// 			});

// 		});

// 		window.myLine.update();
// 	});

$(".js-range-slider").ionRangeSlider({
	min: 0,
	max: 180000,
	// step: 20000,
	grid: true,
	// values_separator:"0 + 20 000 + 40 000 + 50 000"
	// prettify_separator: "20 000, 40 000,"
	
});
function logslider(position, reverse) { 
	// position will be between 0 and 100
	var minp = 0;
	var maxp = 100;
  
	// The result should be between 100 an 10000000
	var minv = Math.log(10);
	var maxv = Math.log(10000);
  
	// calculate adjustment factor
	var scale = (maxv - minv) / (maxp - minp);
	
	return reverse
	  ? (Math.log(position) - minv) / scale + minp
	  : Math.exp(minv + scale * (position - minp))
	  ;
  }
  
  
  $(".js-range-slider").ionRangeSlider({
	skin: "round"
});