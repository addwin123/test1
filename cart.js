// Appertizers
document.getElementById("app_name").innerHTML = sessionStorage.getItem("appertizers_name");
document.getElementById("app_quantity").innerHTML = sessionStorage.getItem("appertizer_quantity");
document.getElementById("app_prices").innerHTML = sessionStorage.getItem("appertizer_price");

//Main_Course
document.getElementById("main_name").innerHTML = sessionStorage.getItem("maincourse_name");
document.getElementById("main_quantity").innerHTML = sessionStorage.getItem("maincourse_quantity");
document.getElementById("main_price").innerHTML = sessionStorage.getItem("maincourse_price");

// Dessert
document.getElementById("dess_name").innerHTML = sessionStorage.getItem("dessert_name");
document.getElementById("dess_quantity").innerHTML = sessionStorage.getItem("dessert_quantity");
document.getElementById("dess_price").innerHTML = sessionStorage.getItem("dessert_price");

//Total
var app_price = parseInt(sessionStorage.getItem("appertizer_price"));
var main_price = parseInt(sessionStorage.getItem("maincourse_price"));
var dess_price = parseInt(sessionStorage.getItem("dessert_price"));
var totalprice = app_price + main_price + dess_price;

document.getElementById("total").innerHTML =  "RM " + totalprice;

//Total price for payment
sessionStorage.setItem("totalprice", totalprice);

//checkout button
function passData()
{
    sessionStorage.setItem("totalprice", totalprice);
}



