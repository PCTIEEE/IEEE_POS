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
var menucon = 0;
var totalsales = 0;

// End Storage Variables


// Main Program Code

function itemPress(item){
	if (waitpur == 0){
		listbefore = document.getElementById("list").innerHTML;
		pricebefore = document.getElementById("price").innerHTML;
		switch (item)
		{
			case 0:
				document.getElementById("list").innerHTML=listbefore + item0 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item0c + "<br />";
				itemc = item0c;
			break;
			case 1:
				document.getElementById("list").innerHTML=listbefore + item1 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item1c + "<br />";
				itemc = item1c;
			break;
			case 2:
				document.getElementById("list").innerHTML=listbefore + item2 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item2c + "<br />";
				itemc = item2c;
			break;
			case 3:
				document.getElementById("list").innerHTML=listbefore + item3 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item3c + "<br />";
				itemc = item3c;
			break;
			case 4:
				document.getElementById("list").innerHTML=listbefore + item4 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item4c + "<br />";
				itemc = item4c;
			break;
			case 5:
				document.getElementById("list").innerHTML=listbefore + item5 + "<br />";
				document.getElementById("price").innerHTML=pricebefore + "$" + item5c + "<br />";
				itemc = item5c;
			break;
		}
		waitpur = 1;	// Tells if a item was selected
	}
}

function numPress(number){
	if (waitpur == 1 || waitpur == 2){
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
		waitpur = 2;	// Tells if a quantity has been selected
		document.getElementById("quantity").innerHTML=numlistbefore + x;
	}
}

function equalsign(){
	//numlistbefore = document.getElementById("quantity").innerHTML;
	if (waitpur == 2){		// Waits for a quantity to be selected
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
	if (waitpur == 0){
		totalsales = totalsales + totalamount;
		document.getElementById("quantity").innerHTML="";
		document.getElementById("list").innerHTML="";
		document.getElementById("price").innerHTML="";
		document.getElementById("total").innerHTML="";
		document.getElementById("totalamount").innerHTML="$" + 0;
		numlistbefore = "";
		waitpur = 0;
		totalamount = 0;
	}
}

function cancel(){
	document.getElementById("quantity").innerHTML="";
	document.getElementById("list").innerHTML="";
	document.getElementById("price").innerHTML="";
	document.getElementById("total").innerHTML="$" + 0;
	document.getElementById("totalamount").innerHTML="$" + 0;
	waitpur = 0;
	totalamount = 0;
}


// Storage/Inventory/Sales Code

function specialmenuPress(){
	specialmenucon = confirm("Total Sales: $" + totalsales + "\n\n");
}



// Menu Items

function menuPress(){
	if(menucon == 0){	
		document.getElementById("main_menu").style.visibility="visible";
		menucon = 1;
	}else{
		document.getElementById("main_menu").style.visibility="hidden";
		menucon = 0;
	}
}