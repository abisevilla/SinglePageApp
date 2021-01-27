// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var Product_list = new Array; 
var Ordered_Product = new Array; 
var TOTAL = 0;
var random_secs = 0;
function Init() {
    console.log("initialization");
    $.ajax({
        method: "GET",
        url: "api/Products",
        dataType: "json",
        success: function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                Product_list.push(data[i]);
                var id_product = data[i].id;
                $("#products_container").append(' <div class="col-md-4"> ' +

                    '  <div class="card" ">  ' +
                    '     <img src="' + data[i].image + '" class="card-img-top product" alt="...">  ' +
                    '      <div class="card-body"> ' +
                    '         <h2 class="card-title"><strong> $' + data[i].price + '</strong></h2> ' +
                    '<button  class="btn  btn-success" data-idproduct="' + data[i].id + '" onclick="addproduct(\''+id_product+'\'\);">Order </button>' +
                    '  </div> ' +
                    '  </div> ' +

                    '  </div> '

                );
            }           
        }
    });
}






function addproduct(id) {
    console.log(id);
    
    var selected = Product_list.find(pro => pro.id === id);

    $("#pro_list").append('<tr class="text-white"> <td> ' + selected.productName + '   </td><td>  ' + selected.price + ' </td> </tr>');
    TOTAL = TOTAL + parseFloat(selected.price);
    $("#pro_total").html('<tr class="text-white"> <td> <strong>TOTAL </strong>  </td><td>  <strong> $' + TOTAL + '</strong> </td> </tr>');
    Ordered_Product.push(selected);
    if (Ordered_Product.length <= 1) {
        console.log("entra")
        product_preparation();
    }
    
}






function product_preparation() {
    if (Ordered_Product.length > 0) {
        console.log("entra fun")
        random_secs = Math.floor(Math.random() * 20) + 1;

        var pre = setInterval(function () {

            random_secs = random_secs - 1;

            var selected = Ordered_Product[0];
            
         
            if (random_secs === 0) {
                clearInterval(pre);
                $("#preparation").html('<tr> <td> <p class="h3 text-white">  Finished!! </p> <br> <img  src=" ' + selected.image + '"  class="card-img-top pre_product"> </td> </tr>');
              
                $(".Single").html("");
                $("#seconds").html("");
                
                var first = Ordered_Product.shift();          
                $("#dispatched_products").append('<tr class="text-white"> <td> ' + first.productName + '   </td><td>  ' + first.price + ' </td> </tr>');
                product_preparation();
            } else {

                document.getElementById("seconds").innerHTML = "Secs Left ";
                document.getElementById("counter").innerHTML = parseInt(random_secs);

                if (selected.productName === "Papas Lays") {
                    $("#preparation").html('<tr> <td> <img src="https://media2.giphy.com/media/ReqpJ6fApNvOw/200.gif"  class="card-img-top product"> </td> </tr>');

                } else if (selected.productName === "Café Capuchino") {
                    $("#preparation").html('<tr> <td> <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/10/25/12/anigif_enhanced-buzz-14226-1351183454-13.gif"  class="card-img-top product"> </td> </tr>');
                } else {
                    $("#preparation").html('<tr> <td> <img src="https://i.pinimg.com/originals/78/7c/5d/787c5ddd7c24bf63c017493cd9602388.gif"  class="card-img-top product"> </td> </tr>');
                }
                return false;
            }
        }, 1000);
    } else {

    }


   
}