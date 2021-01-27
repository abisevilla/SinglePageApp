// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var Product_list = new Array; 
var TOTAL = 0;

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
                    '<button  class="btn  btn-info" data-idproduct="' + data[i].id + '" onclick="addproduct(\''+id_product+'\'\);">Order </button>' +
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

    $("#pro_list").append('<tr> <td> ' + selected.productName + '   </td><td>  ' + selected.price + ' </td> </tr>');
    TOTAL = TOTAL + parseFloat(selected.price);
    $("#pro_total").html('<tr> <td> <strong>TOTAL </strong>  </td><td>  <strong> $' + TOTAL + '</strong> </td> </tr>');
    
}

