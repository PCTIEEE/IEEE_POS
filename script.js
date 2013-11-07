var item; 			// Item Button
var number; 		// Number Button
var x="";			// Quantity Purchased
var itemc;			// Selected item's cost
var listbefore;
var numlistbefore;
var totallistbefore;
var totalrow;
var totalamount = 0;	// Total Purchase Amount

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

function itemPress(item){
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
}

function numPress(number){
	numlistbefore = document.getElementById("quantity").innerHTML;
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
		case 99:
			totalrow =  x * itemc;
			totalamount = totalamount + totalrow;
			document.getElementById("quantity").innerHTML=numlistbefore + x + "<br />";
			document.getElementById("total").innerHTML=totallistbefore + "$" + totalrow + "<br />";
			document.getElementById("totalamount").innerHTML="$" + totalamount;
			x="";
		break;
	}
}

function cancel(){
	document.getElementById("quantity").innerHTML="Quantity<br />";
	document.getElementById("list").innerHTML="Product Price Per<br />";
	document.getElementById("total").innerHTML="Total<br />";
	document.getElementById("totalamount").innerHTML="<br />";
	totalamount = 0;
}