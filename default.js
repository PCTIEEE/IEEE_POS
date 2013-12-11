// The default values are stored here for each load of the application

//Item 1
var item0 = "Ham Hoagies";
var item0c = .75;

//Item 2
var item1 = "Turkey Hoagies";
var item1c = 2;

//Item 3
var item2 = "Chips";
var item2c = 0.25;

//Item 4
var item3 = "Baked Goods";
var item3c = 0.5;

//Item 5
var item4 = "Soda";
var item4c = 0.5;

//Item 6
var item5 = "Water";
var item5c = 1;

// Puts default values into the temporary session storage
function load() {
	
		sessionStorage.item0 = item0;
		sessionStorage.item1 = item1;
		sessionStorage.item2 = item2;
		sessionStorage.item3 = item3;
		sessionStorage.item4 = item4;
		sessionStorage.item5 = item5;
		
		sessionStorage.item0c = item0c;
		sessionStorage.item1c = item1c;
		sessionStorage.item2c = item2c;
		sessionStorage.item3c = item3c;
		sessionStorage.item4c = item4c;
		sessionStorage.item5c = item5c;
		
}