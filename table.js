var main_course_price;
var appertizers_prices;
var desserts_prices;
var app_totalprice;
var main_totalprice;
var dessert_totalprice;

//Appertizers
var appertizers=document.getElementById("appertizers");
document.getElementById("appertizers").addEventListener("change",function() {
    var food=appertizers.options [appertizers.selectedIndex].value;

    switch(food)
    {
        case "soup":
            appertizers_prices = 16;
            app_totalprice = 16;
            document.getElementById("app_price").innerHTML="RM" + app_totalprice;
            break;
        
        case "snail":
            appertizers_prices = 20;
            app_totalprice = 20;
            document.getElementById("app_price").innerHTML="RM " + app_totalprice;
            break;

        case "mushroom":
            appertizers_prices = 20;
            app_totalprice = 20;
            document.getElementById("app_price").innerHTML="RM " + app_totalprice;
            break;
    }
    
})

//Appertizers Price
var main_q=document.getElementById("app_q");
document.getElementById("app_q").addEventListener("change",function() {
    var quantity=app_q.value;
    app_totalprice = appertizers_prices * quantity;
    
    document.getElementById("app_price").innerHTML = "RM " + app_totalprice ;
    
})

//MainCourse
var main_course=document.getElementById("main_course");
document.getElementById("main_course").addEventListener("change",function() {
    var food=main_course.options [main_course.selectedIndex].value;
    
    switch(food)
    {
        case "canard":
            main_course_price = 45;
            main_totalprice = 45;
            document.getElementById("main_price").innerHTML="RM " + main_totalprice;
            break;
        
        case "beef":
            main_course_price = 50;
            main_totalprice = 50;
            document.getElementById("main_price").innerHTML="RM " + main_totalprice;
            break;

        case "fish":
            main_course_price = 55;
            main_totalprice = 55;
            document.getElementById("main_price").innerHTML="RM " + main_totalprice;
            break;

        case "lamb":
            main_course_price = 60;
            main_totalprice = 60;
            document.getElementById("main_price").innerHTML="RM " + app_totalprice;
            break;
    }
    

})

//MainCourse Price
var main_q=document.getElementById("main_q");
document.getElementById("main_q").addEventListener("change",function() {
    var quantity=main_q.value;
    main_totalprice = main_course_price * quantity;
    document.getElementById("main_price").innerHTML = "RM " + main_totalprice ;
    
})

// Dessert
var dessert=document.getElementById("desserts");
document.getElementById("desserts").addEventListener("change",function() {
    var food=desserts.options [desserts.selectedIndex].value;

    switch(food)
    {
        case "tarte":
            desserts_price = 16;
            dessert_totalprice = 16;
            document.getElementById("dess_price").innerHTML="RM " + dessert_totalprice;
            break;
        
        case "brulee":
            desserts_price = 20;
            dessert_totalprice = 20;
            document.getElementById("dess_price").innerHTML="RM " + dessert_totalprice;
            break;
    }

})

// Dessert price
var dessert_q=document.getElementById("dessert_q");
document.getElementById("dessert_q").addEventListener("change",function() {
    var quantity=dessert_q.value;
    dessert_totalprice = desserts_price * quantity;
    document.getElementById("dess_price").innerHTML = "RM " + dessert_totalprice ;
    
})


function Gatherdata () {
    var food1=appertizers.options [appertizers.selectedIndex].value;
    var food2=main_course.options [main_course.selectedIndex].value;
    var food3=desserts.options [desserts.selectedIndex].value;

    if(food1 == "" || food2 == "" || food3 == "")
    {
        alert("Please choose your food.");
        return false;
        
    }
    else
    {
        window.location.href="cart.html";
    }
    
    //appertizers
    var appertizers_name = appertizers.options [appertizers.selectedIndex].text;
    var appertizers_quantity = document.getElementById("app_q").value;
    

    sessionStorage.setItem("appertizers_name", appertizers_name);
    sessionStorage.setItem("appertizer_quantity",appertizers_quantity);
    sessionStorage.setItem("appertizer_price",app_totalprice);

    //main_course
    var main_course_name = main_course.options [main_course.selectedIndex].text;
    var main_course_quantity = document.getElementById("main_q").value;
    

    sessionStorage.setItem("maincourse_name", main_course_name);
    sessionStorage.setItem("maincourse_quantity", main_course_quantity);
    sessionStorage.setItem("maincourse_price", main_totalprice);

    //dessert
    var dessert_name = desserts.options [desserts.selectedIndex].text;
    var dessert_quantity = document.getElementById("dessert_q").value;
    

    sessionStorage.setItem("dessert_name", dessert_name);
    sessionStorage.setItem("dessert_quantity", dessert_quantity);
    sessionStorage.setItem("dessert_price", dessert_totalprice);

}   
