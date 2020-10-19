function Pizza(flavor, toppings, crust, size) {
    this.flavor = flavor;
    this.toppings = toppings;
    this.crust = crust;
    this.size = size;
}
var newOrderP = [];
var amount = 0;
Pizza.prototype.getFlavorPrice = function () {
    if (this.size === "small") {
        if (this.flavor === "margherita") {
            return 980;
        } else if (this.flavor === "barbeque") {
            return 1199;
        } else if (this.flavor === "cheese") {
            return 1300;
        } else if (this.flavor === "veggie") {
            return 1250;
        } else {
            return 1300;
        }
    } else if (this.size === "medium") {
        if (this.flavor === "margherita") {
            return 1230;
        } else if (this.flavor === "barbeque") {
            return 1449;
        } else if (this.flavor === "cheese") {
            return 1550;
        } else if (this.flavor === "veggie") {
            return 1400;
        } else {
            return 1650;
        }
    } else if (this.size === "large") {
        if (this.flavor === "margherita") {
            return 1480;
        } else if (this.flavor === "barbeque") {
            return 1699;
        } else if (this.flavor === "cheese") {
            return 1800;
        } else if (this.flavor === "veggie") {
            return 1650;
        } else {
            return 1900;
        }
    } else {
        if (this.flavor === "margherita") {
            return 1780;
        } else if (this.flavor === "barbeque") {
            return 1999;
        } else if (this.flavor === "cheese") {
            return 2100;
        } else if (this.flavor === "veggie") {
            return 1950;
        } else {
            return 2200;
        }
    }
}
Pizza.prototype.getToppingPrice = function () {
    if (this.size === "small") {
        if (this.toppings === "pepperoni") {
            return 650;
        } else if (this.toppings === "mushrooms") {
            return 700;
        } else if (this.toppings === "onions") {
            return 600;
        } else if (this.toppings === "sausage") {
            return 710;
        } else if (this.toppings === "bacon") {
            return 900;
        } else {
            return 570;
        }
    } else if (this.size === "medium") {
        if (this.toppings === "pepperoni") {
            return 190;
        } else if (this.toppings === "mushrooms") {
            return 950;
        } else if (this.toppings === "onions") {
            return 850;
        } else if (this.toppings === "sausage") {
            return 960;
        } else if (this.toppings === "bacon") {
            return 1100;
        } else {
            return 1320;
        }

    } else if (this.size === "large") {
        if (this.toppings === "pepperoni") {
            return 1150;
        } else if (this.toppings === "mushrooms") {
            return 1200;
        } else if (this.toppings === "onions") {
            return 1100;
        } else if (this.toppings === "sausage") {
            return 1210;
        } else if (this.toppings === "bacon") {
            return 1400;
        } else {
            return 1270;
        }
    } else if (this.size === "mega") {
        if (this.toppings === "pepperoni") {
            return 1450;
        } else if (this.toppings === "mushrooms") {
            return 1500;
        } else if (this.toppings === "onions") {
            return 1400;
        } else if (this.toppings === "sausage") {
            return 1510;
        } else if (this.toppings === "bacon") {
            return 1700;
        } else {
            return 1570;
        }
    }
}
Pizza.prototype.getCrustPrice = function () {
    if (this.size === "small") {
        if (this.crust === "thin") {
            return 660;
        } else if (this.crust === "flatbread") {
            return 610;
        } else if (this.crust === "pizzabagels") {
            return 605;
        } else if (this.crust === "sicilian") {
            return 615;
        } else {
            return 720;
        }
    } else if (this.size === "medium") {
        if (this.crust === "thin") {
            return 910;
        } else if (this.crust === "flatbread") {
            return 860;
        } else if (this.crust === "pizzabagels") {
            return 855;
        } else if (this.crust === "sicilian") {
            return 865;
        } else {
            return 970;
        }
    } else if (this.size === "large") {
        if (this.crust === "thin") {
            return 1160;
        } else if (this.crust === "flatbread") {
            return 1110;
        } else if (this.crust === "pizzabagels") {
            return 1105;
        } else if (this.crust === "sicilian") {
            return 1115;
        } else {
            return 1220;
        }
    } else if (this.size === "mega") {
    if (this.crust === "thin") {
        return 1460;
    } else if (this.crust === "flatbread") {
        return 1410;
    } else if (this.crust === "pizzabagels") {
        return 1405;
    } else if (this.crust === "sicilian") {
        return 1415;
    } else {
        return 1520;
    }
}
}
Pizza.prototype.getTotalPrice = function () {
    return this.getFlavorPrice() + this.getCrustPrice() + this.getToppingPrice();
}
amount = 0;
console.log(amount);

$(document).ready(function () {

    $("#form").submit(function (event) {
        event.preventDefault();
        var flavorP = $("#flavor").val();
        var toppingsP = $("#toppings").val();
        var crustP = $("#crust").val();
        var sizeP = $("#size").val();

        var newPizzaOrder = new Pizza(flavorP, toppingsP, crustP, sizeP);
        newOrderP.push(newPizzaOrder);


     $("#flavor").val("");
     $("#toppings").val("");
     $("#crust").val("");
     $("#size").val("");

     amount = 0;
     for (let i= 0; i <newOrderP.length; i++){
               amount += newOrderP[i].getTotalPrice();
     }
  
     $("#orders1").append(
         "<tr>" +
         '<td scope="header">' +
         newPizzaOrder.flavor +
         "@ksh" +
         newPizzaOrder.getFlavorPrice() +
         "<td>" +
         newPizzaOrder.toppings +
         "@ksh" +
         newPizzaOrder.getToppingPrice() +
           "<td>" +

         newPizzaOrder.crust+
         "@ksh" +
         newPizzaOrder.getCrustPrice() +
        "<td>" +
         newPizzaOrder.size +
         "<td>" +
         newPizzaOrder.getTotalPrice() +
         "<td>" +
         "</tr>"
     );

    });
 
    $("#totals").append ("");
    $("#tamount").fadeIn();
    $("#t2").fadeIn();
    $("#form4").fadeIn();
    
    $("#tamount").empty();
    $("#tamount").append(amount);
    $("#tamount").show();

    $("#t2").click(function () {
      $(".checkout-text").show();

    });

    $("#form6").submit(function (event) {
        event.preventDefault();
        var name = $("#d1").val();
        var deliveryDetails = $("#delivery-details").val();
        clientName = name;
        $("#d1").val("");
        $("#delivery-details").val("");
        $(".checkout-text").hide();
        $("#t2").hide();
        $("#tamount").empty();
        if (deliveryDetails === "1") {
            $(".location").show();
            $(".p1").show();
            $("#tamount").empty();
            $("#amount1").append(250);
            amount += 250;
            $("#tamount").empty();
            $("#tamount").empty();
        $("#tamount").append(amount);
        $(".p2").show();

            
        } else {
            alert(clientName + ": Your total bill is Ksh. " + amount + ". Your order will be ready for collection in the next one hours");
        }
    });

    $("#form2").submit(function (event) {
        event.preventDefault();
        var court = $("#court").val();
        var doorNumber = $("door1").val();
        court = court;
        doorNumber = doorNumber;
        $("#t2").hide();
        $(".location").hide();
        $("#tamount").empty();
        $("#tamount").append(totalAmount);
        $(".p2").show();
        alert(clientName + ": Your total amount is Ksh. " + amount + ". Your order will be delivered shortly to " + court + ", " + doorNumber + " in the next one hour");
    });
});