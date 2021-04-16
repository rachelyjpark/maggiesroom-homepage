let drawer1 = document.querySelector('.dresser-1');
let knob1 = document.querySelector('.ellipse-1');
let knob2 = document.querySelector('.ellipse-2');

let drawer2 = document.querySelector('.dresser-2');
let knob3 = document.querySelector('.ellipse-3');
let knob4 = document.querySelector('.ellipse-4');

let drawer3 = document.querySelector('.dresser-3');
let knob5 = document.querySelector('.ellipse-5');
let knob6 = document.querySelector('.ellipse-6');

let drawer4 = document.querySelector('.dresser-4');
let knob7 = document.querySelector('.ellipse-7');
let knob8 = document.querySelector('.ellipse-8');

let drawer5 = document.querySelector('.dresser-5');
let knob9 = document.querySelector('.ellipse-11');
let knob10 = document.querySelector('.ellipse-10');

let drawer6 = document.querySelector('.dresser-6');
let knob11 = document.querySelector('.ellipse-9');
let knob12 = document.querySelector('.ellipse-12');


drawer1.addEventListener('mouseover', function(event) {
	drawer1.style.transform = 'scale(1.18)';
	drawer1.style.zIndex = ('2');
	knob1.style.transform = ('scale(1.2');
	knob2.style.transform = ('scale(1.2');

});

drawer1.addEventListener('mouseout', function(event) {
	drawer1.style.transform = 'scale(1)';

	knob1.style.transform = ('scale(1');
	knob2.style.transform = ('scale(1');

});

drawer2.addEventListener('mouseover', function(event) {
	drawer2.style.transform = 'scale(1.18)';
	drawer2.style.zIndex = ('2');
	knob3.style.transform = ('scale(1.2');
	knob4.style.transform = ('scale(1.2');

});

drawer2.addEventListener('mouseout', function(event) {
	drawer2.style.transform = 'scale(1)';
	drawer2.style.zIndex = '1';
	knob3.style.transform = ('scale(1');
	knob4.style.transform = ('scale(1');

});

drawer3.addEventListener('mouseover', function(event) {
	drawer3.style.transform = 'scale(1.18)';
	drawer3.style.zIndex = ('2');
	knob5.style.transform = ('scale(1.2');
	knob6.style.transform = ('scale(1.2');

});

drawer3.addEventListener('mouseout', function(event) {
	drawer3.style.transform = 'scale(1)';
	knob5.style.transform = ('scale(1');
	knob6.style.transform = ('scale(1');

});

drawer4.addEventListener('mouseover', function(event) {
	drawer4.style.transform = 'scale(1.18)';
	drawer4.style.zIndex = ('2');
	knob7.style.transform = ('scale(1.2');
	knob8.style.transform = ('scale(1.2');

});

drawer4.addEventListener('mouseout', function(event) {
	drawer4.style.transform = 'scale(1)';
	knob7.style.transform = ('scale(1');
	knob8.style.transform = ('scale(1');

});

drawer5.addEventListener('mouseover', function(event) {
	drawer5.style.transform = 'scale(1.18)';
	drawer5.style.zIndex = ('2');
	knob9.style.transform = ('scale(1.2');
	knob10.style.transform = ('scale(1.2');

});

drawer5.addEventListener('mouseout', function(event) {
	drawer5.style.transform = 'scale(1)';
	knob9.style.transform = ('scale(1');
	knob10.style.transform = ('scale(1');

});

drawer6.addEventListener('mouseover', function(event) {
	drawer6.style.transform = 'scale(1.18)';
	drawer6.style.zIndex = ('2');
	knob11.style.transform = ('scale(1.2');
	knob12.style.transform = ('scale(1.2');

});

drawer6.addEventListener('mouseout', function(event) {
	drawer6.style.transform = 'scale(1)';
	drawer6.style.zIndex = ('1');
	knob11.style.transform = ('scale(1');
	knob12.style.transform = ('scale(1');

});

