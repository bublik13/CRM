(()=>{"use strict";var e=[,(e,t,o)=>{function a(){console.log("done!")}o.r(t),o.d(t,{testFunction:()=>a})}],t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{o.r(a),(0,o(1).testFunction)();new Swiper(".slider__swiper",{direction:"horizontal",slidesPerView:"auto",spaceBetween:10}),new Swiper(".popular-categories__swiper",{direction:"horizontal",slidesPerView:"4",spaceBetween:25,navigation:{nextEl:".popular-categories__btn-prev",prevEl:".popular-categories__btn-next"}});var e=document.querySelector(".js-menu"),t=document.querySelector(".js-nav"),r=document.querySelector(".js-profile"),i=document.querySelector(".js-profile-img"),n=document.querySelector(".js-burger"),c=document.querySelector(".js-logo"),l=document.querySelector(".js-grid"),s=document.querySelector(".js-container");n.addEventListener("click",(function(){n.classList.toggle("burger--active"),c.classList.toggle("logo__img-name--active"),t.classList.toggle("nav--active"),r.classList.toggle("profile--active"),i.classList.toggle("profile-img--active"),e.classList.toggle("menu--active"),l.classList.toggle("grid--active"),s.classList.toggle("container--active")}));new Swiper(".statistic__swiper",{direction:"horizontal",slidesPerView:"3",spaceBetween:26,navigation:{nextEl:".statistic__btn-prev",prevEl:".statistic__btn-next"}});var d={type:"line",data:{labels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],datasets:[{backgroundColor:window.chartColors.blue,borderColor:["#00D322"],fill:!1,data:[75,80,78,80,78,83,85,85,89,85,80,83]}]},options:{elements:{point:{radius:0}},legend:{display:!1},responsive:!0,scales:{xAxes:[{gridLines:{display:!0,color:"transparent"},display:!0,scaleLabel:{display:!0},ticks:{padding:20,fontSize:15,color:"#767676"}}],yAxes:[{gridLines:{display:!0,color:"#292929",drawBorder:!1},backgroundColor:window.chartColors.blue,display:!0,scaleLabel:{display:!0},ticks:{min:75,max:90,padding:36,fontSize:15,color:"#767676",stepSize:5}}]}}};window.onload=function(){var e=document.getElementById("canvas").getContext("2d");window.myLine=new Chart(e,d)},$(".js-range-slider").ionRangeSlider({min:0,max:18e4,grid:!0}),$(".js-range-slider").ionRangeSlider({skin:"round"});var y={data:[{y:"1",a:50,b:90,c:11},{y:"2",a:0,b:0,c:0},{y:"3",a:50,b:50,c:33},{y:"4",a:75,b:60,c:44},{y:"5",a:80,b:65,c:55},{y:"6",a:90,b:70,c:66},{y:"7",a:100,b:75,c:77},{y:"8",a:115,b:75,c:88},{y:"9",a:120,b:85,c:99},{y:"10",a:145,b:85,c:11},{y:"11",a:160,b:95,c:45},{y:"12",a:0,b:0,c:0},{y:"13",a:50,b:50,c:33},{y:"14",a:75,b:60,c:44},{y:"15",a:80,b:65,c:55},{y:"16",a:90,b:70,c:66},{y:"17",a:100,b:75,c:77},{y:"18",a:115,b:75,c:88},{y:"19",a:120,b:85,c:99},{y:"20",a:145,b:85,c:11},{y:"21",a:160,b:95,c:45},{y:"22",a:50,b:90,c:11},{y:"23",a:0,b:0,c:0},{y:"24",a:50,b:50,c:33},{y:"25",a:75,b:60,c:44},{y:"26",a:80,b:65,c:55},{y:"27",a:90,b:70,c:66},{y:"28",a:100,b:75,c:77},{y:"29",a:115,b:75,c:88},{y:"30",a:120,b:85,c:99}],xkey:"y",ykeys:["a","b","c"],labels:["Total Income","Total Outcome"],fillOpacity:.6,stacked:!0,resize:!0,pointFillColors:["#ffffff"],pointStrokeColors:["black"],barColors:["blue","green","orange"],yLabelFormat:function(e){return"$"+e},xLabelFormat:function(e){return e.src.y},hoverCallback:function(e,t,o,a){return"custom 1"},element:"bar-chart"};Morris.Bar(y);new Swiper(".list-violations__swiper",{direction:"horizontal",slidesPerView:"4",spaceBetween:25,navigation:{nextEl:".list-violations__btn-prev",prevEl:".list-violations__btn-next"}})})()})();