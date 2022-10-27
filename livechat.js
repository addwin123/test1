
function validateForm() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    if (x != "" && y != "") {
        alert("Thanks for your submission");
        return true;

    }
}


function onOroff(x) {
    x.classList.toggle("fa-times-circle");
}
function displayLivechat() {
    var element = document.getElementById("rLC");//toggle between classes
    element.classList.toggle("displayLivechat");
}
function Click() {
    var msg = document.getElementById("usermsg").value;
    var z = document.createElement("p");
    z.innerHTML = '<p style="text-align:right;background-color: #d7dfebd2;padding:16px 5px 10px 10px;border:0.1px solid silver;border-radius:40px;width:300px;height:50px;margin-left:35px;">' + msg + '<img src="img_avatar.png" alt="" style="border-radius:50% ;width:50px ;height:50px;"></p>';
    if (msg == "") {
        alert("key in something to sent the message");
    }
    else {
        document.getElementById("real-ChatLog").appendChild(z);
    }
}
function Click2() {
    var msg = document.getElementById("usermsg").value;
    var x = document.createElement("p");
    var y = document.createElement("p");
    var z = document.createElement("p");
    var a = document.createElement("p");
    x.innerHTML = '<p style="background:-webkit-linear-gradient(left, #222831, #393E46);color:white;border:0.1px solid silver;border-radius:40px;width:300px;padding:10px 0px 10px 10px;"><img src="agent001.jpg" alt="" style="border-radius:40px ;width:50px ;height:50px;margin-right:10px;">Hi ! How can I help you?</p>';
    y.innerHTML = '<p style="background:-webkit-linear-gradient(left, #222831, #393E46);color:white;border:0.1px solid silver;border-radius:40px;width:300px;padding:10px 0px 10px 10px;"><img src="agent001.jpg" alt="" style="border-radius:40px ;width:50px ;height:50px;margin-right:10px;">Yes, we open at Mon - Fri : 11a.m. - 10p.m. Sat - Sun : 11a.m. - 12a.m.</p>';
    a.innerHTML = '<p style="background:-webkit-linear-gradient(left, #222831, #393E46);color:white;border:0.1px solid silver;border-radius:40px;width:300px;padding:10px 0px 10px 10px;"><img src="agent001.jpg" alt="" style="border-radius:40px ;width:50px ;height:50px;margin-right:10px;">Yes, What should I call you?</p>';
    z.innerHTML = '<p style="background:-webkit-linear-gradient(left, #222831, #393E46);color:white;border:0.1px solid silver;border-radius:40px;width:300px;padding:10px 0px 10px 10px;"><img src="agent001.jpg" alt="" style="border-radius:40px ;width:50px ;height:50px;margin-right:10px;">Yes, You may visit our order page to take an order.</p>';
  
    if (msg == "") {
        alert("key in something to sent the message");
    }

    else if (msg === "Hi!" || msg === "Hi" || msg === "Hello!" || msg === "hi" || msg === "Hey") {
        setTimeout(function () {
            document.getElementById("real-ChatLog").appendChild(x);

        }, 3000);
    }
    else if (msg === "What time do you open?" || msg === "Are you open?") {
        setTimeout(function () {
            document.getElementById("real-ChatLog").appendChild(y);

        }, 3000);
    }
    else if (msg === "Can I make a reservation?" || msg === "I'd like to make a reservation.") {
        setTimeout(function () {
            document.getElementById("real-ChatLog").appendChild(z);

        }, 3000);
    }
    else if (msg === "I would like to order a meal." || msg === "How could I place an order?") {
        setTimeout(function () {
            document.getElementById("real-ChatLog").appendChild(a);

        }, 3000);
    }
    else if (msg) {
        setTimeout(function () {
            document.getElementById("real-ChatLog").appendChild(a);

        }, 3000);
    }

}
var mybutton = document.getElementById("myButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        mybutton.style.display = "block";
        mybutton.style.color = "grey";
    } else {
        mybutton.style.color = "black";
    }
}




