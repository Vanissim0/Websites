// function planet1() {
//     alert('information about planet 1');
// };

// document.querySelector("loader").onclick = function plan1() {
//     alert("hello!");
// }

// function plan1() {
//     alert('information about planet 1111');
// };
// var plans1 = document.querySelector(".circle1");
// plans1.onclick = function(){
//     alert('shet')
// };

// plan1.addEventListener('click', planet1());

// 2
// function Alert() {
//     alert("hi");
// };

// function ChangeColor(Element) {
// 	if (Element.class == '.circle') Element.class = '.light';
// 	else Element.class = '.circle';
// 	return false;
// }

// function changeClass(el) {
//     if (el.class == 'circle');
// }

// document.querySelector('.table').addEventListener('click', function() {
//     const c = document.querySelector('.table').classList;
//     c.toggle('circle');
//     c.toggle('light');
//     document.querySelector('#side').classList.toggle('d-done');
//   });
// document.querySelector('.table').addEventListener('click', function(){
//     classList.toggle('light');
// } )

document.querySelector('div.table1').addEventListener("click", function(){
    document.querySelector('div.sun').classList.toggle('bigSun');
});

document.querySelector('div.table2').addEventListener("click", function(){
    document.querySelector('div.circle1').classList.toggle('light');
    // document.getElementById("merc").className += "light";
    // document.getElementsByClassName('table').classList.toggle('light');
//     document.getElementsByClassName('table').classList.add('light');
//     document.getElementsByClassName('table').classList.remove('light');
});

document.querySelector('div.table3').addEventListener("click", function(){
    document.querySelector('div.circle2').classList.toggle('light');
});
document.querySelector('div.table4').addEventListener("click", function(){
    document.querySelector('div.circle3').classList.toggle('light');
});
document.querySelector('div.table5').addEventListener("click", function(){
    document.querySelector('div.circle4').classList.toggle('light');
});
document.querySelector('div.table6').addEventListener("click", function(){
    document.querySelector('div.circle5').classList.toggle('light');
});
document.querySelector('div.table7').addEventListener("click", function(){
    document.querySelector('div.circle6').classList.toggle('light');
});
document.querySelector('div.table8').addEventListener("click", function(){
    document.querySelector('div.circle7').classList.toggle('light');
});
document.querySelector('div.table9').addEventListener("click", function(){
    document.querySelector('div.circle8').classList.toggle('light');
});
// document.querySelector('div.table').addEventListener("click", ChangeColor());
// function ChangeColor(el){
//     document.querySelector('div.el.class').setAttribute('class', 'light');
// }
// var div = document.getElementById('div'); 
//   document.querySelector('.table').onclick = function(){
//     div.classList.toggle('circle1');
//     div.classList.toggle('light');
// }