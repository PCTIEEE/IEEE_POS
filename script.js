var item; 			// Item Button
var number; 		// Number Button
var x="";			// Quantity Purchased
var itemc;			// Selected item's cost
var listbefore;
var numlistbefore = "";
var totallistbefore;
var totalrow;
var totalamount = 0;	// Total Purchase Amount

var waitpur = 0;			// Wait variable for prior item input to be complete

// Storage Variables

var specialmenucon;		// Returns if special menu modifications are accepted
var totalsales = 0;

// End Storage Variables

//Default Values
//Item 1
var item0 = "Ham Hoagies";
var item0c = 1;
var item0t=item0+item0c;

//Item 2
var item1 = "Turkey Hoagies";
var item1c = 2;
var item1t=item1+item1c;

//Item 3
var item2 = "Chips";
var item2c = 0.25;
var item2t=item2+item2c;

//Item 4
var item3 = "Baked Goods";
var item3c = 0.5;
var item3t=item3+item3c;

//Item 5
var item4 = "Soda";
var item4c = 0.5;
var item4t=item4+item4c;

//Item 6
var item5 = "Water";
var item5c = 1;
var item5t=item5+item5c;


// Main Program Code

function itemPress(item){
	if (waitpur == 0){
		listbefore = document.getElementById("list").innerHTML;
		switch (item)
		{
			case 0:
				document.getElementById("list").innerHTML=listbefore + item0t + "<br />";
				itemc = item0c;
			break;
			case 1:
				document.getElementById("list").innerHTML=listbefore + item1t + "<br />";
				itemc = item1c;
			break;
			case 2:
				document.getElementById("list").innerHTML=listbefore + item2t + "<br />";
				itemc = item2c;
			break;
			case 3:
				document.getElementById("list").innerHTML=listbefore + item3t + "<br />";
				itemc = item3c;
			break;
			case 4:
				document.getElementById("list").innerHTML=listbefore + item4t + "<br />";
				itemc = item4c;
			break;
			case 5:
				document.getElementById("list").innerHTML=listbefore + item5t + "<br />";
				itemc = item5c;
			break;
		}
		waitpur = 1;
	}
}

function numPress(number){
	if (waitpur == 1){
		totallistbefore = document.getElementById("total").innerHTML;
		switch (number)
		{
			case 0:
				x= x+"0";
			break;
			case 1:
				x= x+"1";
			break;
			case 2:
				x= x+"2";
			break;
			case 3:
				x= x+"3";
			break;
			case 4:
				x= x+"4";
			break;
			case 5:
				x= x+"5";
			break;
			case 6:
				x= x+"6";
			break;
			case 7:
				x= x+"7";
			break;
			case 8:
				x= x+"8";
			break;
			case 9:
				x= x+"9";
			break;
		}
		document.getElementById("quantity").innerHTML=numlistbefore + x;
	}
}

function equalsign(){
	//numlistbefore = document.getElementById("quantity").innerHTML;
	if (waitpur == 1){
		totalrow =  x * itemc;
		totalamount = totalamount + totalrow;
		numlistbefore = document.getElementById("quantity").innerHTML=  numlistbefore + x + "<br />";
		document.getElementById("total").innerHTML=totallistbefore + "$" + totalrow + "<br />";
		document.getElementById("totalamount").innerHTML="$" + totalamount;
		waitpur = 0;
		x="";
	}
}

function paid(){
	totalsales = totalsales + totalamount;
	document.getElementById("quantity").innerHTML="";
	document.getElementById("list").innerHTML="";
	document.getElementById("total").innerHTML="$" + 0;
	document.getElementById("totalamount").innerHTML="$" + 0;
	waitpur = 0;
	totalamount = 0;
}

function cancel(){
	document.getElementById("quantity").innerHTML="";
	document.getElementById("list").innerHTML="";
	document.getElementById("total").innerHTML="$" + 0;
	document.getElementById("totalamount").innerHTML="$" + 0;
	waitpur = 0;
	totalamount = 0;
}


// Storage/Inventory/Sales Code

function specialmenuPress(){
	specialmenucon = confirm("Total Sales: $" + totalsales + "\n\n" + "Inventory:");
}