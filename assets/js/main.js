let propertiesData;

$(document).ready(function() {
    $(window).on("scroll", function(){
        if(window.scrollY > 200){
            $("#scroll_top").show();
        } else {
            $("#scroll_top").hide();
        }

});

    // Fetch properties JSON data
    fetch('./assets/properties.json')
        .then(response => response.json())
        .then(data => {
            propertiesData = data;
            // Render cards
            propertiesData.forEach(property => {
                let cardHtml = `<div class="col-6 col-lg-3 my-5 m-0 m-auto">
                    <div class="card">
                        <div class="img_conta">
                            <img class="card-img-top" src="${property.image}" alt="Card image cap">
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5 class="card-title">${property.title}</h5>
                                <p class="card-text">${property.price}</p>
                            </div>
                            <div class="mt-2 bag_col">
                                <ion-icon name="information-circle-outline" class="py-1 px-2 me-2 bag-outline"></ion-icon>
                                <ion-icon name="information-circle" class="py-1 px-2 me-2 bag-filled"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>`;
                $('#properties .row').append(cardHtml);
            });
        });

    // Scroll to top animation on button click
    $("#scroll_top").click(function(){
        $('html, body').animate({scrollTop: 0}, 50);
    });
});
