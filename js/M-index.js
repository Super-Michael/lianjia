/* foot点击效果

1.点击哪个哪个加上active类,当前列表隐藏，对应的列表显示；

*/

window.onload = function(){

	var ljfz = document.querySelector('.ljfz');
	var hotCity = document.querySelector('.hotcity');
	// var ul = document.querySelectorALL('.fContent ul');
	var area = document.querySelector('.fContent .area');
	var city = document.querySelector('.fContent .city');

	ljfz.onclick = function(){
		ljfz.className = 'active';
		hotCity.className = '';
		area.className = 'area change';
		city.className = 'city';
	}
	
	hotCity.onclick = function(){
		ljfz.className = '';
		hotCity.className = 'active';
		area.className = 'area';
		city.className = 'city change';
	}


	// console.log(area);

	// var index = 0;
	// var len = btn.length;
	// console.log(len);
	// for  (var i = 0; i < len ;i++) {
	// 	btn[i].index = i;
	// 	btn[i].onclick = function(){
	// 		btn[index].className = '';
	// 		ul[index].className = '';
	// 	}


	// }









}