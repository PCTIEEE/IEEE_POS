// make the variables used for calculations and naming for the main page
function main_load() {
	
		//Items
		item0 = sessionStorage.item0;
		item1 = sessionStorage.item1;
		item2 = sessionStorage.item2;
		item3 = sessionStorage.item3;
		item4 = sessionStorage.item4;
		item5 = sessionStorage.item5;
		
		//Costs
		item0c = sessionStorage.item0c;
		item1c = sessionStorage.item1c;
		item2c = sessionStorage.item2c;
		item3c = sessionStorage.item3c;
		item4c = sessionStorage.item4c;
		item5c = sessionStorage.item5c;
	
		document.getElementById("i0").innerHTML = item0 + "<br /> $" + item0c;
		document.getElementById("i1").innerHTML = item1 + "<br /> $" + item1c;
		document.getElementById("i2").innerHTML = item2 + "<br /> $" + item2c;
		document.getElementById("i3").innerHTML = item3 + "<br /> $" + item3c;
		document.getElementById("i4").innerHTML = item4 + "<br /> $" + item4c;
		document.getElementById("i5").innerHTML = item5 + "<br /> $" + item5c;
		
}

// makes variables for naming and filling in text boxes on the inventory page
function inv_load() {
	
		//Items
		item0 = sessionStorage.item0;
		item1 = sessionStorage.item1;
		item2 = sessionStorage.item2;
		item3 = sessionStorage.item3;
		item4 = sessionStorage.item4;
		item5 = sessionStorage.item5;
		
		document.getElementById("frm0").innerHTML = item0;
		document.getElementById("frm1").innerHTML = item1;
		document.getElementById("frm2").innerHTML = item2;
		document.getElementById("frm3").innerHTML = item3;
		document.getElementById("frm4").innerHTML = item4;
		document.getElementById("frm5").innerHTML = item5;
		
		//Costs
		item0c = sessionStorage.item0c;
		item1c = sessionStorage.item1c;
		item2c = sessionStorage.item2c;
		item3c = sessionStorage.item3c;
		item4c = sessionStorage.item4c;
		item5c = sessionStorage.item5c;
	
		document.getElementById("frm0c").innerHTML = item0c;
		document.getElementById("frm1c").innerHTML = item1c;
		document.getElementById("frm2c").innerHTML = item2c;
		document.getElementById("frm3c").innerHTML = item3c;
		document.getElementById("frm4c").innerHTML = item4c;
		document.getElementById("frm5c").innerHTML = item5c;
		
}

function inv_update() {
	
		sessionStorage.item0 = document.getElementById("frm0").value;
		sessionStorage.item1 = document.getElementById("frm1").value;
		sessionStorage.item2 = document.getElementById("frm2").value;
		sessionStorage.item3 = document.getElementById("frm3").value;
		sessionStorage.item4 = document.getElementById("frm4").value;
		sessionStorage.item5 = document.getElementById("frm5").value;
	
		sessionStorage.item0c = document.getElementById("frm0c").value;
		sessionStorage.item1c = document.getElementById("frm1c").value;
		sessionStorage.item2c = document.getElementById("frm2c").value;
		sessionStorage.item3c = document.getElementById("frm3c").value;
		sessionStorage.item4c = document.getElementById("frm4c").value;
		sessionStorage.item5c = document.getElementById("frm5c").value;
		
}