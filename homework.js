///----------------------------------------------------------------------------------------------------------------------------------------------------------
/*Создайте Класс GOOD
свойства isAvailable, shop метод chekAvailability*/
/*Создайте дочерний классы laptop, phone, computer
у них создать 3 публичных свойства, 2 публичных метода, 
по 2 приватных метода*/
/*1. Реализовать наследование через установку
 экхемпляра родителя как протипипа потомка*/
/*2. Реализовать наследование используя указание контекста
 выполнения для конструктора родителя*/
/*3. Использовать Оbject.create для 
указания прототипа для дочерних классов
Сами дочерние классы наполнить ТОЛЬКО используя Object.defineProperties
приватные методы описать отдельно от объекта. 
Используя методы привязки контекста привязать их к конкретным объектам*/
/*Создайти по 3 экз объекта дочерних классов
Выведите в документ в 
<div id="shop">

	//Этот фрагмент повторяется для каждой группы товаров
	//(т.е.) для каждого набора ЭО дочерних классов
	<h2>Good type</h2>
	<div class="goodsWrapper">
		<div class="good">
			<div class="icon">
				<img src='path/to/icon'>
			</div>
			<h3>Good name</h3>
			<h4>Good price</h3>
		</div>
	</div>

</div>	
*/
/* отрисовкой разметки занимается отдельная функция*/
var GOOD = {
	constructor: function(icon, name, price, isAvailable){
		this.icon = icon;
		this.name = name;
		this.price = price;
		this.isAvailable = isAvailable;
		return this;
	},
	chekAvailability: function(){
		if(this.isAvailable !== 0){
			this.isAvailable = 'В Наличии' +" " + " количество " + ' ' + this.isAvailable;
		}else{
			this.isAvailable = 'Нет в наличии' +" " + " количество " + ' ' + this.isAvailable;
		}
		return this.isAvailable;
	}
};
var Leptop = Object.create(GOOD);
Leptop.constructor = function(name, price, isAvailable, box){
	GOOD.constructor.call(this, name, price, isAvailable, box );
	this.box = box;
	return this;
};
Leptop.getFullInfo = function(){
	console.log(this.name + this.price + this.isAvailable + this.box);
};
var Phone = Object.create(GOOD);
Phone.constructor = function(name, price, isAvailable, box){
	GOOD.constructor.call(this, name, price, isAvailable, box );
	this.box = box;
	return this;
};
Phone.getFullInfo = function(){
	console.log(this.name + this.price + this.isAvailable + this.box);
};
var Computer = Object.create(GOOD);
Computer.constructor = function(icon ,name, price, isAvailable, box){
	GOOD.constructor.call(this, icon, name, price, isAvailable, box );
	this.box = box;
	return this;
};
Computer.getFullInfo = function(){
	console.log(this.name + this.price + this.isAvailable + this.box);
};

var lep1 = Object.create(Leptop).constructor( '<img src="iPad.jpeg" alt="computer"/>', 
	'iPad', '400$',12, 'have box' );
lep1.chekAvailability();
console.log(lep1);
console.log(lep1.getFullInfo());
Object.defineProperty(Leptop, 'Info', {
	get: function(){
		return 'info: ' +  this.name + '' + this.price;
	}
});
console.log(lep1.Info);
var Phone1 = Object.create(Phone).constructor('<img src="iPhone.jpeg" alt="computer"/>', 
	'iPhone', '800$',2, 'have box' );
Phone1.chekAvailability();
console.log(Phone1);
console.log(Phone1.getFullInfo());
Object.defineProperty(Phone, 'Info', {
	get: function(){
		return 'info: ' +  this.name + '' + this.price;
	}
});
console.log(Phone1.Info);
var Computer1 = Object.create(Computer).constructor('<img src="images.jpeg" alt="computer"/>',
 'MacBooc', '1400$',0, 'have box' );
Computer1.chekAvailability();
console.log(Computer1);
console.log(Computer1.getFullInfo());
Object.defineProperty(Computer, 'Info', {
	get: function(){
		return 'info: ' +  this.name + '' + this.price;
	}
});
console.log(Computer1.Info);

function renderShop (obj){
	document.write('<div class="item" style= "text-align: center;">');
	for(var key in obj){
		if(key == 'icon'){
			document.write('<div class="itemIcon">' + obj[key] + '</div>');
		}else if(key == 'name'){
			document.write('<h3 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h3>');
		}else if(key == 'price'){
			document.write('<h4 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h4>');
		}else if(key == 'isAvailable'){
			document.write('<h4 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h4>');
		}
	}
}	document.write('</div>');

renderShop(lep1);
renderShop(Phone1);
renderShop(Computer1);

/*var GOOD = function (isAvailable){
	this.isAvailable = isAvailable;
	this.chekAvailability = function(){
		if(this.isAvailable !== 0){
			this.isAvailable = 'В Наличии';
		}else{
			this.isAvailable = 'Нет в наличии';
		}
		return this.isAvailable;
	};
};*/
/*var Leptop = new GOOD('1');
Leptop.chekAvailability();
function createLaptop(name, price, box){
	var that = this;
	that.name = name;
	that.price = price;
	that.box = box;
	that.nameDevice = function(){
		alert('Devise name ' + ' ' + that.name);
	};
	that.priceDevice = function(){
		alert('Devise price ' + ' ' + that.price);
	};
	that.fullInfo = function(){
		nameANDprice();
	};
	that.full = nameANDprice;
	that.bonus = flash;
	function nameANDprice(){
		alert(that.name + ' ' +  that.price);
	}
	function flash(bonus){
		if(bonus === 'yes'){
			alert('this product have bonus FLASH');
		}
	}
}
createLaptop.prototype = Leptop;

var Lep1 = new createLaptop('iPad', '400$','have box');
Lep1.nameDevice();
Lep1.full();
Lep1.bonus('yes');
Lep1.fullInfo();
console.log(Lep1);*/


/*var Phone = new GOOD(1);
Phone.chekAvailability();

function createPhone(name, price, box){
	var that = this;
	that.name = name;
	that.price = price;
	that.box = box;
	that.nameDevice = function(){
		alert('Devise name ' + ' ' + that.name);
	};
	that.priceDevice = function(){
		alert('Devise price ' + ' ' + that.price);
	};
	that.fullInfo = function(){
		nameANDprice();
	};
	that.full = nameANDprice;
	that.bonus = flash;
	function nameANDprice(){
		alert(that.name + ' ' +  that.price);
	}
	function flash(bonus){
		if(bonus === 'yes'){
			alert('this product have bonus FLASH');
		}
	}
}

createPhone.prototype = Phone;
var Phone1 = new createPhone('iPad', '400$','have box');
Phone1.nameDevice();
Phone1.full();
Phone1.bonus('yes');
Phone1.fullInfo();
console.log(Phone1);
*/

/*var Computer = new GOOD('1');
Computer.chekAvailability();

function createComputer(name, price, box){
	var that = this;
	that.name = name;
	that.price = price;
	that.box = box;
	that.nameDevice = function(){
		alert('Devise name ' + ' ' + that.name);
	};
	that.priceDevice = function(){
		alert('Devise price ' + ' ' + that.price);
	};
	that.fullInfo = function(){
		nameANDprice();
	};
	that.full = nameANDprice;
	that.bonus = flash;
	function nameANDprice(){
		alert(that.name + ' ' +  that.price);
	}
	function flash(bonus){
		if(bonus === 'yes'){
			alert('this product have bonus FLASH');
		}
	}
}
createComputer.prototype = Computer;
var Computer1 = new createComputer('macBook', '1400$','have box');
Computer1.nameDevice();
Computer1.full();
Computer1.bonus('yes');
Computer1.fullInfo();
console.log(Computer1);*/













