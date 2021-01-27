// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function Init() {
    console.log("initialization");
    $.ajax({
        method: "GET",
        url: "api/Products",
        dataType: "json",
        success: function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                $("#products_container").append(' <div class="col-lg-4"> ' +

                    '  <div class="card" ">  ' +
                    '     <img src="' + data[i].image + '" class="card-img-top product" alt="...">  ' +
                    '      <div class="card-body"> ' +
                    '         <h2 class="card-title"><strong> $' + data[i].price +'</strong></h2> ' +
                   '<button class="btn btn-info">Order </button>'+
                    '  </div> ' +
                    '  </div> ' +

                    '  </div> '

                );
            }

           
        }
    });
}