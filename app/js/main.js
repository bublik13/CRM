import {testFunction} from './scripts/test';
testFunction();

  const swiper = new Swiper('.slider__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10
  });
  const swiperPopularCategories = new Swiper('.popular-categories__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "4",
    spaceBetween: 25,
    navigation: {
      nextEl: '.popular-categories__btn-prev',
      prevEl: '.popular-categories__btn-next',
    },
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
      nextEl: '.statistic__btn-prev',
      prevEl: '.statistic__btn-next',
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
					padding: 20,
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


$(".js-range-slider").ionRangeSlider({
	min: 0,
	max: 180000,
	grid: true,
});
function logslider(position, reverse) { 
	var minp = 0;
	var maxp = 100;
	var minv = Math.log(10);
	var maxv = Math.log(10000);
	var scale = (maxv - minv) / (maxp - minp);
	return reverse
	  ? (Math.log(position) - minv) / scale + minp
	  : Math.exp(minv + scale * (position - minp))
	  ;
  }
  
  $(".js-range-slider").ionRangeSlider({
	skin: "round"
});


var data = [
	{ y: '1', a: 50, b: 90, c:11},
		{ y: '2', a: 0,  b: 0, c:0},
		{ y: '3', a: 50,  b: 50, c:33},
		{ y: '4', a: 75,  b: 60, c:44},
		{ y: '5', a: 80,  b: 65, c:55},
		{ y: '6', a: 90,  b: 70, c:66},
		{ y: '7', a: 100, b: 75, c:77},
		{ y: '8', a: 115, b: 75, c:88},
		{ y: '9', a: 120, b: 85, c:99},
		{ y: '10', a: 145, b: 85, c:11},
		{ y: '11', a: 160, b: 95, c:45},
		  { y: '12', a: 0,  b: 0, c:0},
		{ y: '13', a: 50,  b: 50, c:33},
		{ y: '14', a: 75,  b: 60, c:44},
		{ y: '15', a: 80,  b: 65, c:55},
		{ y: '16', a: 90,  b: 70, c:66},
		{ y: '17', a: 100, b: 75, c:77},
		{ y: '18', a: 115, b: 75, c:88},
		{ y: '19', a: 120, b: 85, c:99},
		{ y: '20', a: 145, b: 85, c:11},
		{ y: '21', a: 160, b: 95, c:45},
		{ y: '22', a: 50, b: 90, c:11},
		{ y: '23', a: 0,  b: 0, c:0},
		{ y: '24', a: 50,  b: 50, c:33},
		{ y: '25', a: 75,  b: 60, c:44},
		{ y: '26', a: 80,  b: 65, c:55},
		{ y: '27', a: 90,  b: 70, c:66},
		{ y: '28', a: 100, b: 75, c:77},
		{ y: '29', a: 115, b: 75, c:88},
		{ y: '30', a: 120, b: 85, c:99}
	  ],
	  formatY = function (y) {
			  return '$'+y;
		  },
	  formatX = function (x) {
			  return x.src.y;
		  },
	  
	  configTwo = {
		data: data,
		xkey: 'y',
		ykeys: ['a', 'b' , 'c'],
		labels: ['Total Income', 'Total Outcome'],
		fillOpacity: 0.6,
		// hideHover: 'auto',
		stacked: true,
		resize: true,
		pointFillColors:['#ffffff'],
		pointStrokeColors: ['black'],
		barColors:['blue','green','orange'],
		yLabelFormat:formatY,
		xLabelFormat: formatX,
		hoverCallback: function (index, options, content, row) {
		  return 'custom 1';
		}
	};
	  
	configTwo.element = 'bar-chart';
  Morris.Bar(configTwo);

  const swiperlistViolations = new Swiper('.list-violations__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "4",
    spaceBetween: 25,
    navigation: {
      nextEl: '.list-violations__btn-prev',
      prevEl: '.list-violations__btn-next',
    },
  });
